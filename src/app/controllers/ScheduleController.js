import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';
import User from '../models/User';
import Appointment from '../models/Appointment';

class SheduleController {
  async index(req, res) {
    const checkUserProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkUserProvider) {
      return res.status(401).json({ error: 'User is not a Provider' });
    }

    const { date } = req.query;
    const parseDate = parseISO(date);
    /**
     * aqui eu vou pegar todos os agendamentos do dia
     * comparando o intervalo dos horarios de inicio
     * em 00:00:00 até 23:59:50
     */

    const appointment = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        conceled_at: null,
        date: {
          [Op.between]: [startOfDay(parseDate), endOfDay(parseDate)],
        },
      },
      order: ['date'],
    });

    return res.json(appointment);
  }
}

export default new SheduleController();
