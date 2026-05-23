import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const { packageName, name, company, email, phone, projectType, budgetRange, message } = await req.json();

  if (!name || !email || !projectType || !budgetRange) {
    return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
  }

  try {
    const response = await resend.emails.send({
      from: "XZVL Inquiry Form <onboarding@resend.dev>",
      to: "xzviel@gmail.com",
      replyTo: email,
      subject: `New Inquiry${packageName ? ` — ${packageName}` : ""} from ${name}`,
      html: `
        <div style="font-family: monospace; background: #131313; color: #e2e2e2; padding: 32px; max-width: 600px;">
          <h2 style="color: #ed0d11; margin: 0 0 24px;">NEW INQUIRY RECEIVED</h2>
          ${packageName ? `<div style="background: rgba(237,13,17,0.1); border: 1px solid rgba(237,13,17,0.3); padding: 12px 16px; margin-bottom: 24px; color: #ed0d11;">INTERESTED IN: ${packageName}</div>` : ""}
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #b4b5b5; width: 160px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #b4b5b5;">Company</td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #b4b5b5;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ed0d11;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #b4b5b5;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #b4b5b5;">Project Type</td><td style="padding: 8px 0;">${projectType}</td></tr>
            <tr><td style="padding: 8px 0; color: #b4b5b5;">Budget Range</td><td style="padding: 8px 0; color: #ed0d11;">${budgetRange}</td></tr>
          </table>
          ${message ? `<div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #353535;"><p style="color: #b4b5b5; margin: 0 0 8px;">MESSAGE</p><p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br />")}</p></div>` : ""}
        </div>
      `,
    });

    if (response.error) {
      return NextResponse.json({ error: "Failed to send inquiry." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send inquiry." }, { status: 500 });
  }
}
