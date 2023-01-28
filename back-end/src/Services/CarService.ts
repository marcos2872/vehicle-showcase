import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  async createCar(obj: ICar) {
    const carModel = new CarModel();

    const newCar = await carModel.create({ ...obj, status: obj.status || false });
    
    return this.createCarDomain(newCar);
  }

  async findCars() {
    const carModel = new CarModel();

    const allCars = await carModel.find();

    return allCars.map((curr) => ({
      id: curr._id,
      model: curr.model,
      year: curr.year,
      color: curr.color,
      status: curr.status,
      buyValue: curr.buyValue,
      doorsQty: curr.doorsQty,
      seatsQty: curr.seatsQty,
    }));
  }

  async findCarsById(id: string) {
    const carModel = new CarModel();

    const carsById = await carModel.findById(id);

    return carsById ? {
      id: carsById._id,
      model: carsById.model,
      year: carsById.year,
      color: carsById.color,
      status: carsById.status,
      buyValue: carsById.buyValue,
      doorsQty: carsById.doorsQty,
      seatsQty: carsById.seatsQty, 
    } : null;
  }

  async updateCarById(id: string, obj: ICar) {
    const carModel = new CarModel();

    const update = await carModel.update(id, obj);

    return update ? {
      id: update._id,
      model: update.model,
      year: update.year,
      color: update.color,
      status: update.status,
      buyValue: update.buyValue,
      doorsQty: update.doorsQty,
      seatsQty: update.seatsQty, 
    } : null;
  }

  async deleteCarById(id: string) {
    const carModel = new CarModel();
    const car = await this.findCarsById(id);
    if (!car) {
      return { message: 'Car not found' };
    }
    await carModel.delete(id);
    return null;
  }
}