// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, company, email, whatsapp, message, services } =
    await request.json();

  // Garantir que services seja um array
  const servicesArray = Array.isArray(services) ? services : [services];

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465,
      secure: true,
      auth: {
        user: "helton.supervisor@klholding.com.br",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "helton.supervisor@klholding.com.br",
      to: "helton.supervisor@klholding.com.br",
      subject: `SITE KL - Nova mensagem de ${name} da empresa ${company}`,
      text: `
        Nome: ${name}
        Empresa: ${company}
        Email: ${email}
        WhatsApp: ${whatsapp}
        Mensagem: ${message}
        Serviços de Interesse: ${servicesArray.join(", ")}
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    return NextResponse.json(
      {
        message:
          "Erro ao enviar o email. Verifique as credenciais e as configurações SMTP.",
      },
      { status: 500 }
    );
  }
}
