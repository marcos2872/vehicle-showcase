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

  async findCars() {
    try {
      const cars = await prisma.cars.findMany();

      return cars;
    } catch (error) {
      return null;
    }
  }

  async findCarById(id: string) {
    try {
      const cars = await prisma.cars.findUnique({ where: { id } });

      return cars;
    } catch (error) {
      return null;
    }
  }
}