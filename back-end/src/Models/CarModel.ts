import prisma from './prisma';

export default class CarModel {
  async createCar(obj: any) {
    try {      
      const car = await prisma.cars.create({
        data: {
          ...obj,
        },
      });
      return car;
    } catch (error) {
      console.log((error as Error).message);
      
      return null;
    }
  }
}