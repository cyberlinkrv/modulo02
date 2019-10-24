import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provider' });
  }

  const [, token] = authHeader.splint(' ');

  try {
    jwt.verify();
  } catch (erro) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
