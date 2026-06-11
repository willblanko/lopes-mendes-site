import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Serviço de e-mail não configurado." }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const nome = (body.nome as string)?.trim();
    const email = (body.email as string)?.trim();
    const telefone = (body.telefone as string)?.trim();
    const area = (body.area as string)?.trim();
    const mensagem = (body.mensagem as string)?.trim();

    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: "Preencha todos os campos obrigatórios." }, { status: 400 });
    }

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #003567; padding: 24px 32px;">
          <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: 400;">Nova Mensagem de Contato</h1>
          <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">Formulário de Contato — lopesmendes.adv.br</p>
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
            ${telefone ? `
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Telefone</td>
              <td style="padding: 10px 0;">${escapeHtml(telefone)}</td>
            </tr>` : ""}
            ${area ? `
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Área de interesse</td>
              <td style="padding: 10px 0;">${escapeHtml(area)}</td>
            </tr>` : ""}
            <tr>
              <td colspan="2" style="padding: 16px 0 0;">
                <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #888; margin-bottom: 8px;">Mensagem</div>
                <div style="background: #fff; border: 1px solid #e8e8e8; padding: 16px; border-left: 3px solid #01A8DD; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(mensagem)}</div>
              </td>
            </tr>
          </table>
        </div>
        <div style="padding: 16px 32px; background: #fff; border: 1px solid #e8e8e8; border-top: none; font-size: 12px; color: #aaa;">
          Enviado via formulário de contato em lopesmendes.adv.br
        </div>
      </div>
    `;

    const { data, error: resendError } = await resend.emails.send({
      from: "Lopes Mendes — Contato <contato@lopesmendes.adv.br>",
      to: ["contato@lopesmendes.adv.br"],
      replyTo: email,
      subject: `Contato — ${nome}${area ? ` — ${area}` : ""}`,
      html: htmlBody,
    });

    if (resendError) {
      console.error("[contato] Resend error:", resendError);
      return NextResponse.json({ error: `Erro ao enviar e-mail: ${resendError.message}` }, { status: 500 });
    }

    console.log("[contato] E-mail enviado, id:", data?.id);
    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("[contato] Erro:", error);
    return NextResponse.json({ error: "Erro interno. Tente novamente." }, { status: 500 });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
