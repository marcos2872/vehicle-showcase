// import Car from '../Domains/Car';
import path from 'path';
import fs from 'fs';
import CarModel from '../Models/CarModel';
import ICar from '../Interfaces/ICar';
import 'dotenv/config';
import jwt from '../utils/token';
import prisma from '../Models/prisma';

const { PORT } = process.env;

export default class CarService {
  fotmatImageArray(obj: ICar) {
    const { brand, model, year, mileage, price } = obj;

    const dirName = (brand + model + year + mileage + price).replace(' ', '');

    const dir = path.join(__dirname, `../../public/${dirName}`);
    const imgs = fs.readdirSync(dir);
    const arrayImages = imgs.reduce((acc: { url: string }[], curr: string) => (
      [...acc, { url: `http://localhost:${PORT}/images/${dirName}/${curr}`.replace(' ', '') }]
    ), []);
    return arrayImages;
  }

  async createCar(obj: ICar, token: string) {
    const carModel = new CarModel();
    const { brand, model, year, mileage, price } = obj;
    const arrayImages = this.fotmatImageArray(obj);

    const id = jwt.tokenResolve(token);
    const role = await prisma.users.findUnique({ where: { id } });
    
    if (role?.role === 'user') return { cod: 403, resp: { message: 'doesn\'t have permission' } };
    
    const newCar = await carModel.createCar({
      brand, model, year, mileage, price, images: arrayImages,
    });

    if (!newCar) return { cod: 500, resp: { message: 'error when registering' } };
    
    return { cod: 201, resp: { message: 'registered successfully' } };
  }

  async findCars() {
    const carModel = new CarModel();

    const allCars = await carModel.findCars();

    return { cod: 200, rep: allCars };
  }

  async findCarById(id: string) {
    const carModel = new CarModel();

    const allCars = await carModel.findCarById(id);

    if (!allCars) return { cod: 404, rep: { message: 'Not Found' } };

    return { cod: 200, rep: allCars };
  }

  // async findCarsById(id: string) {
  //   const carModel = new CarModel();

  //   const carsById = await carModel.findById(id);

  //   return carsById ? {
  //     id: carsById._id,
  //     model: carsById.model,
  //     year: carsById.year,
  //     color: carsById.color,
  //     status: carsById.status,
  //     buyValue: carsById.buyValue,
  //     doorsQty: carsById.doorsQty,
  //     seatsQty: carsById.seatsQty, 
  //   } : null;
  // }

  // async updateCarById(id: string, obj: ICar) {
  //   const carModel = new CarModel();

  //   const update = await carModel.update(id, obj);

  //   return update ? {
  //     id: update._id,
  //     model: update.model,
  //     year: update.year,
  //     color: update.color,
  //     status: update.status,
  //     buyValue: update.buyValue,
  //     doorsQty: update.doorsQty,
  //     seatsQty: update.seatsQty, 
  //   } : null;
  // }

  // async deleteCarById(id: string) {
  //   const carModel = new CarModel();
  //   const car = await this.findCarsById(id);
  //   if (!car) {
  //     return { message: 'Car not found' };
  //   }
  //   await carModel.delete(id);
  //   return null;
  // }
}