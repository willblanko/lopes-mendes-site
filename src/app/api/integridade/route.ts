import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Serviço de e-mail não configurado." }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const mensagem = (body.mensagem as string)?.trim();
    const nome = (body.nome as string)?.trim() || null;
    const email = (body.email as string)?.trim() || null;
    const anonimo = body.anonimo === true;

    if (!mensagem) {
      return NextResponse.json({ error: "A mensagem não pode estar vazia." }, { status: 400 });
    }

    const remetenteLabel = anonimo ? "Remetente anônimo" : (nome || "Não informado");

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #003567; padding: 24px 32px;">
          <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: 400;">Canal de Integridade</h1>
          <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">Nova mensagem recebida — lopesmendes.adv.br</p>
        </div>
        <div style="padding: 32px; background: #f7f8fa; border: 1px solid #e8e8e8;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 10px 0; color: #888; width: 160px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Remetente</td>
              <td style="padding: 10px 0; font-weight: 700; color: ${anonimo ? "#888" : "#333"};">${escapeHtml(remetenteLabel)}</td>
            </tr>
            ${!anonimo && email ? `
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">E-mail de resposta</td>
              <td style="padding: 10px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #004C90;">${escapeHtml(email)}</a></td>
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
          Enviado via Canal de Integridade em lopesmendes.adv.br
          ${anonimo ? " — <strong>Mensagem anônima</strong>" : ""}
        </div>
      </div>
    `;

    const { data, error: resendError } = await resend.emails.send({
      from: "Lopes Mendes — Canal de Integridade <contato@lopesmendes.adv.br>",
      to: ["ilopes@lopesmendes.adv.br"],
      replyTo: (!anonimo && email) ? email : undefined,
      subject: `Canal de Integridade — ${anonimo ? "Mensagem Anônima" : remetenteLabel}`,
      html: htmlBody,
    });

    if (resendError) {
      console.error("[integridade] Resend error:", resendError);
      return NextResponse.json({ error: `Erro ao enviar mensagem: ${resendError.message}` }, { status: 500 });
    }

    console.log("[integridade] Mensagem enviada, id:", data?.id);
    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("[integridade] Erro:", error);
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
