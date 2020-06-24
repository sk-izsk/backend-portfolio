import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import mailGun from 'nodemailer-mailgun-transport';
import Mail from 'nodemailer/lib/mailer';

dotenv.config();

const auth: {
  auth: {
    api_key: string;
    domain: string;
  };
} = {
  auth: {
    api_key: process.env.API_TOKEN as string,
    domain: process.env.DOMAIN as string,
  },
};

const transporter: Mail = nodemailer.createTransport(mailGun(auth));

const sendMail: (email: string, subject: string, text: string) => void = (
  email: string,
  subject: string,
  text: string,
) => {
  const mailOptions: {
    from: string;
    subject: string;
    text: string;
    to: string;
  } = {
    from: email,
    subject,
    text,
    to: 'sk.zeeshan1992@gmail.com',
  };

  transporter.sendMail(mailOptions, (err: Error | null, data: any) => {
    return err ? console.log('error occurs', err) : console.log('message sent');
  });
};

export { sendMail };
