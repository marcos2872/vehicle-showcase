import { Request, Response } from 'express';
import UserService from '../Services/UserService';

export default class UserContoller {
  async userLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    const service = new UserService();

    const { cod, resp } = await service.userLogin(email, password);

    res.status(cod).json(resp);
  }

  async userCreate(req: Request, res: Response) {
    const data = req.body;
    const service = new UserService();
    
    const { cod, resp } = await service.userCreate(data);

    res.status(cod).json(resp);
  }
}