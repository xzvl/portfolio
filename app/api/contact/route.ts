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
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br />")}</p>`,
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
