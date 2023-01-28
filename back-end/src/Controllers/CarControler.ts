import { Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  createCar = async (req: Request, res: Response) => {
    const car = req.body.body;
    const { authorization } = req.headers as { authorization: string };
    const service = new CarService();
    
    const { cod, resp } = await service.createCar(JSON.parse(car), authorization);
    return res.status(cod).json(resp);
  };

  findCars = async (req: Request, res: Response) => {
    const { id } = req.query as { id: string };
    const service = new CarService();

    if (id) {
      const { cod, rep } = await service.findCarById(id);
      
      return res.status(cod).json(rep);
    }
    const { cod, resp } = await service.findCars();  
    return res.status(cod).json(resp);
  };

  updateCar = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const { authorization } = req.headers as { authorization: string };
    const car = req.body;
    const service = new CarService();

    const { cod, resp } = await service.updateCar(id, car, authorization);
    return res.status(cod).json(resp);
  };

  deleteCar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const service = new CarService();
    const { cod, resp } = await service.deleteCar(id);
    return res.status(cod).json(resp);
  };
}