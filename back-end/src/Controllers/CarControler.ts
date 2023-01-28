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
    const { cod, rep } = await service.findCars();  
    return res.status(cod).json(rep);
  };

  // updateCar = async (req: Request, res: Response) => {
  //   const { id } = req.params;
  //   const car = req.body;

  //   try {      
  //     const updated = await this._CarService.updateCarById(id, car);
      
  //     return updated ? res.status(200).json(updated)
  //       : res.status(404).json({ message: 'Car not found' });
  //   } catch (error) {
  //     return res.status(422).json({ message: INVALID_MONGOID_MESSAGE });
  //   }
  // };

  // deleteCarById = async (req: Request, res: Response) => {
  //   const { id } = req.params;
  //   try {
  //     const result = await this._CarService.deleteCarById(id);
  //     if (result) {
  //       return res.status(404).json(result);
  //     }
  //     return res.sendStatus(204);
  //   } catch (error) {
  //     return res.status(422).json({ message: INVALID_MONGOID_MESSAGE });
  //   }
  // };
}