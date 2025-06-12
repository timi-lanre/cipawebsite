import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  console.log("call to send email");
  const { fullName, email, subject, message } = await req.json();
  console.log(fullName);

  if (!fullName || !email || !subject || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // Setup transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASSWORD, 
    },
  });

  const mailOptions = {
  from: 'CIPA Web Contact Form <luminhphuc258@gmail.com>',
  to: 'luminhphuc258@gmail.com',
  replyTo: email, 
  subject: subject,
  text: `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
};

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
