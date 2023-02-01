// import Car from '../Domains/Car';
import path from 'path';
import fs from 'fs';
import CarModel from '../Models/CarModel';
import ICar from '../Interfaces/ICar';
import 'dotenv/config';

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

  async createCar(obj: ICar) {
    const carModel = new CarModel();
    const { brand, model, year, mileage, price } = obj;
    const arrayImages = this.fotmatImageArray(obj);
    
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

    const Car = await carModel.findCarById(id);

    if (!Car) return { cod: 404, rep: { message: 'Not Found' } };

    return { cod: 200, resp: Car };
  }

  async updateCar(id: string, obj: ICar) {
    const carModel = new CarModel();
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