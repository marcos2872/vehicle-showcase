import { Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  createCar = async (req: Request, res: Response) => {
    const car = req.body.body;
    const service = new CarService();
    
    const { cod, resp } = await service.createCar(JSON.parse(car));
    return res.status(cod).json(resp);
  };

  findCars = async (req: Request, res: Response) => {
    const { id } = req.query as { id: string };
    const service = new CarService();

    if (id) {
      const { cod, resp } = await service.findCarById(id);
      
      return res.status(cod).json(resp);
    }
    const { cod, resp } = await service.findCars();  
    return res.status(cod).json(resp);
  };

  updateCar = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const car = req.body;
    const service = new CarService();

    const { cod, resp } = await service.updateCar(id, car);
    return res.status(cod).json(resp);
  };

  deleteCar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const service = new CarService();
    const { cod, resp } = await service.deleteCar(id);
    return res.status(cod).json(resp);
  };
}