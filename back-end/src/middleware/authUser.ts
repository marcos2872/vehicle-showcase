import { NextFunction, Request, Response } from 'express';
import IUser from '../Interfaces/IUser';
import prisma from '../Models/prisma';
import jwt from '../utils/token';

export default async function (req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers as { authorization: string };
  const idUser = jwt.tokenResolve(authorization);
  const { role } = await prisma.users.findUnique({ where: { id: idUser } }) as IUser;
  if (role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
}