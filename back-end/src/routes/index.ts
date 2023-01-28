import { Router } from 'express';
import CarControler from '../Controllers/CarControler';

const route = Router();

const carControler = new CarControler();
route.get('/cars/:id', carControler.findCarsById);
route.get('/cars', carControler.findCars);
route.put('/cars/:id', carControler.updateCar);
route.post('/cars', carControler.createCar);

export default route;
