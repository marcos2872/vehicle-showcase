import { Request, Response } from 'express';
import CarService from '../Services/CarService';

const INVALID_MONGOID_MESSAGE = 'Invalid mongo id';

export default class CarController {
  private _CarService: CarService;
  constructor() {
    this._CarService = new CarService();
  }

  createCar = async (req: Request, res: Response) => {
    const car = req.body;
    try {
      const newCar = await this._CarService.createCar(car);
      return res.status(201).json(newCar);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  };

  findCars = async (_req: Request, res: Response) => {
    try {
      const allCars = await this._CarService.findCars();
      
      return res.status(200).json(allCars);
    } catch (error) {
      return res.status(500).json((error as Error).message);
    }
  };

  findCarsById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const carId = await this._CarService.findCarsById(id);
      if (!carId) {
        return res.status(404).json({ message: 'Car not found' });
      }
      return res.status(200).json(carId);
    } catch (error) {
      return res.status(422).json({ message: INVALID_MONGOID_MESSAGE });
    }
  };

  updateCar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const car = req.body;

    try {      
      const updated = await this._CarService.updateCarById(id, car);
      
      return updated ? res.status(200).json(updated)
        : res.status(404).json({ message: 'Car not found' });
    } catch (error) {
      return res.status(422).json({ message: INVALID_MONGOID_MESSAGE });
    }
  };

  deleteCarById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const result = await this._CarService.deleteCarById(id);
      if (result) {
        return res.status(404).json(result);
      }
      return res.sendStatus(204);
    } catch (error) {
      return res.status(422).json({ message: INVALID_MONGOID_MESSAGE });
    }
  };
}