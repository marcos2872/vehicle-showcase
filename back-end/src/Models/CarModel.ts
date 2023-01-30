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
      const cars = await prisma.cars.findMany({
        orderBy: {
          price: 'asc',
        },
      });

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

  async updateCar(id: string, data: any) {
    try {
      const updated = await prisma.cars.update({
        where: { id }, data,
      });
      return updated;
    } catch (error) {
      return null;
    }
  }

  async deleteCar(id: string) {
    try {
      const deleted = await prisma.cars.delete({
        where: { id },
      });
      return deleted;
    } catch (error) {
      return null;
    }
  }
}