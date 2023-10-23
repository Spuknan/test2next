import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  try {
    const body = await req.text();
    const data = JSON.parse(body);

    if (!data.name || !data.message || !data.email) {
      return NextResponse.json(
        { message: "Falta información" },
        { status: 400 }
      );
    }

    const emailData = {
      from: 'formulario@mikithomas.com.ar',
      to: ['contacto@mikithomas.com.ar'],
      subject: 'Formulario de contacto || mikithomas.com.ar',
      react: EmailTemplate({ name: data.name, message: data.message, email: data.email }),
    };

    const emailResponse = await resend.emails.send(emailData);

    return NextResponse.json(
      { message: "Email sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Error" },
      { status: 500 }
    );
  }
}
