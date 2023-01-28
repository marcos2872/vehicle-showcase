import IUser from '../Interfaces/IUser';
import prisma from './prisma';

export default class UserModel {
  async userLogin(email: string): Promise<IUser | null> {
    try {
      const user = await prisma.users.findUnique({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      return null;
    }
  }

  async userCreate(obj: any): Promise<IUser | null> {
    try {
      const user = await prisma.users.create({
        data: { ...obj },
      });
  
      return user;
    } catch (error) {
      return null;
    }
  }
}