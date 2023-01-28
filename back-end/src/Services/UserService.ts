import IUser from '../Interfaces/IUser';
import UserModel from '../Models/UserModel';
import bcrypt from '../utils/bcrypt';
import jwt from '../utils/token';

export default class UserService {
  private _userModel: UserModel;

  constructor() {
    this._userModel = new UserModel();
  }

  async userLogin(email: string, pass: string) {
    const user = await this._userModel.userLogin(email);
    if (!user) return { cod: 404, resp: { message: 'User not found' } };

    const verifyPassword = bcrypt.comparePassword(pass, user.password);

    if (!verifyPassword) return { cod: 401, resp: { message: 'Invalid Password' } };

    const token = jwt.generateToken(user.id);

    return { cod: 200,
      resp: {
        token,
        name: user.name,
        email: user.email,
        role: user.role,
      } };
  }

  async userCreate({ name, email, password }: IUser) {
    const has = bcrypt.encryptPassword(password);

    const user = await this._userModel.userCreate({
      name, email, password: has,
    });
    if (!user) return { cod: 400, resp: { message: '' } };

    const token = jwt.generateToken(user.id);
    console.log(token);

    return { cod: 201,
      resp: {
        token,
        name: user.name,
        email: user.email,
        role: user.role,
      } };
  }
}