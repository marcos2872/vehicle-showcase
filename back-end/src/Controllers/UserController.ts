import { Request, Response } from 'express';
import UserService from '../Services/UserService';

export default class UserContoller {
  private _userService: UserService;

  constructor() {
    this._userService = new UserService();
  }

  async userLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    const { cod, resp } = await this._userService.userLogin(email, password);

    res.status(cod).json(resp);
  }

  async userCreate(req: Request, res: Response) {
    const data = req.body;
    const teste = new UserService();
    
    const { cod, resp } = await teste.userCreate(data);

    res.status(cod).json(resp);
  }
}