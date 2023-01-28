// import Car from '../Domains/Car';
import path from 'path';
import fs from 'fs';
import CarModel from '../Models/CarModel';
import ICar from '../Interfaces/ICar';
import 'dotenv/config';
import jwt from '../utils/token';
import prisma from '../Models/prisma';

const { PORT } = process.env;
const m501 = 'Not Implemented';

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

    return { cod: 200, resp: allCars };
  }

  async findCarById(id: string) {
    const carModel = new CarModel();

    const allCars = await carModel.findCarById(id);

    if (!allCars) return { cod: 404, rep: { message: 'Not Found' } };

    return { cod: 200, resp: allCars };
  }

  async updateCar(id: string, obj: ICar, token: string) {
    const carModel = new CarModel();

    const idUser = jwt.tokenResolve(token);
    const role = await prisma.users.findUnique({ where: { id: idUser } });
    
    if (role?.role === 'user') return { cod: 403, resp: { message: 'doesn\'t have permission' } };

    const update = await carModel.updateCar(id, obj);

    if (!update) return { cod: 501, resp: { message: m501 } };

    return { cod: 200, resp: { message: 'Updated' } };
  }

  async deleteCar(id: string) {
    const carModel = new CarModel();
    try {
      const car = await carModel.findCarById(id) as ICar | null;
      const dir = path.join(__dirname, '..', '..', `public/${car?.images[0].url.split('/')[4]}`);
      
      if (fs.existsSync(dir)) {
        fs.rmdirSync(dir, { recursive: true });
      }
          
      const deleted = await carModel.deleteCar(id);
      if (!deleted) return { cod: 501, resp: { message: m501 } };
      
      return { cod: 200, resp: { message: 'Deleted' } };
    } catch (error) {
      console.log((error as Error).message);
      
      return { cod: 501, resp: { message: m501 } };
    }
  }
}