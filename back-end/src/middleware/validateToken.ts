import { NextFunction, Request, Response } from 'express';
import jwt from '../utils/token';

function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers as { authorization: string };
  
  if (!jwt.tokenIsValid(authorization)) return res.status(401).json({ message: 'Unauthorized' });
  next();
}

export default validateToken;