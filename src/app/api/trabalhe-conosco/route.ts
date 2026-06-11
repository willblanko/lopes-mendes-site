import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Serviço de e-mail não configurado." }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const formData = await request.formData();

    const nome = (formData.get("nome") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const telefone = (formData.get("telefone") as string)?.trim();
    const area = (formData.get("area") as string)?.trim();
    const apresentacao = (formData.get("apresentacao") as string)?.trim();
    const curriculo = formData.get("curriculo") as File | null;

    if (!nome || !email || !telefone || !curriculo || curriculo.size === 0) {
      return NextResponse.json({ error: "Preencha todos os campos obrigatórios." }, { status: 400 });
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(curriculo.type)) {
      return NextResponse.json({ error: "Formato inválido. Envie PDF, DOC ou DOCX." }, { status: 400 });
    }

    if (curriculo.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "Arquivo muito grande. Tamanho máximo: 5 MB." }, { status: 400 });
    }

    const curriculoBuffer = Buffer.from(await curriculo.arrayBuffer());

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #003567; padding: 24px 32px;">
          <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: 400;">Nova Candidatura</h1>
          <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">Trabalhe Conosco — lopesmendes.adv.br</p>
        </div>
        <div style="padding: 32px; background: #f7f8fa; border: 1px solid #e8e8e8;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 10px 0; color: #888; width: 160px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Nome</td>
              <td style="padding: 10px 0; font-weight: 700;">${escapeHtml(nome)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">E-mail</td>
              <td style="padding: 10px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #004C90;">${escapeHtml(email)}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Telefone</td>
              <td style="padding: 10px 0;">${escapeHtml(telefone)}</td>
            </tr>
            ${area ? `
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Área de interesse</td>
              <td style="padding: 10px 0;">${escapeHtml(area)}</td>
            </tr>` : ""}
            ${apresentacao ? `
            <tr>
              <td colspan="2" style="padding: 16px 0 0;">
                <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #888; margin-bottom: 8px;">Carta de apresentação</div>
                <div style="background: #fff; border: 1px solid #e8e8e8; padding: 16px; border-left: 3px solid #01A8DD; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(apresentacao)}</div>
              </td>
            </tr>` : ""}
          </table>
        </div>
        <div style="padding: 16px 32px; background: #fff; border: 1px solid #e8e8e8; border-top: none; font-size: 12px; color: #aaa;">
          Enviado via formulário de candidatura em lopesmendes.adv.br
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Lopes Mendes — Trabalhe Conosco <curriculos@lopesmendes.adv.br>",
      to: ["contato@lopesmendes.adv.br"],
      replyTo: email,
      subject: `Currículo — ${nome}${area ? ` — ${area}` : ""}`,
      html: htmlBody,
      attachments: [
        {
          filename: curriculo.name,
          content: curriculoBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[trabalhe-conosco] Erro ao enviar e-mail:", error);
    return NextResponse.json({ error: "Erro interno ao processar candidatura. Tente novamente." }, { status: 500 });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
