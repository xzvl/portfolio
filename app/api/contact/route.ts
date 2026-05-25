import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  try {
    const response = await resend.emails.send({
      from: `XZVL Website Form <onboarding@resend.dev>`,
      to: "xzviel@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: monospace; background: #131313; color: #e2e2e2; padding: 32px; max-width: 600px;">
          <h2 style="color: #ed0d11; margin: 0 0 24px;">NEW MESSAGE RECEIVED</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #b4b5b5; width: 160px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #b4b5b5;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ed0d11;">${email}</a></td></tr>
          </table>
          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #353535;">
            <p style="color: #b4b5b5; margin: 0 0 8px;">MESSAGE</p>
            <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br />")}</p>
          </div>
        </div>
      `,
    });

    if (response.error) {
      console.error("Resend error:", response.error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    console.log("Email sent successfully:", response.data);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send exception:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
