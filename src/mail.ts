import nodemailer from 'nodemailer';
import mailGun from 'nodemailer-mailgun-transport';
import Mail from 'nodemailer/lib/mailer';

const auth: {
  auth: {
    api_key: string;
    domain: string;
  };
} = {
  auth: {
    api_key: 'd0add712ecaf55d45137ea157c48c065-468bde97-3d31dc22',
    domain: 'sandboxe368944fa0ee4c5f9b83dc4f8f46f691.mailgun.org',
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
