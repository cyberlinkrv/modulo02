import Pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';
import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { appointment } = data;

    console.log('A fila executou');

    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Agendamento cancelado',
      template: 'cancellation' /** Aqui passo o templaite que estou usando */,
      context: {
        /** Aqui dentro do context vou enviar para o template todas as variaveis
        que ele esta esperando: quando declaro provider abaixo estou fazendo
        referencia a variavel que esta no meu templaite e assim sucessivamente
        a data estou formatando ela */
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: format(
          parseISO(appointment.date),
          "'dia' dd 'de' MMMM', às' H:mm'h' ",
          {
            locale: Pt,
          }
        ),
      },
    });
  }
}

export default new CancellationMail();
