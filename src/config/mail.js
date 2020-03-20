/**
 * aqui vou colocar as configuraçãos do servidor de e-mail SMTP que vou usar
 *vou usar o servidor do Mailtrap porque fincuona so em ambiente DEV
 */
export default {
  host: 'smtp.mailtrap.io',
  port: '2525',
  secure: false,
  auth: {
    user: '3d9d4572f640a4',
    pass: '7bc76d2f3a82a8',
  },
  default: {
    from: 'Equipe GoBarber <noreplay@gobarber.com>',
  },
};
