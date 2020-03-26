/**
 * aqui vou colocar as configuraçãos do servidor de e-mail SMTP que vou usar
 *vou usar o servidor do Mailtrap porque fincuona so em ambiente DEV
 */
export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: process.env.MAIL_FROM,
  },
};
