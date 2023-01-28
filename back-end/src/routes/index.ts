import { Router } from 'express';
// import CarControler from '../Controllers/CarControler';
import UserContoller from '../Controllers/UserController';

const route = Router();

// const carControler = new CarControler();
// route.get('/cars/:id', carControler.findCarsById);
// route.get('/cars', carControler.findCars);
// route.put('/cars/:id', carControler.updateCar);
// route.post('/cars', carControler.createCar);

const userController = new UserContoller();

route.post('/login', userController.userLogin);
route.post('/user', userController.userCreate);

export default route;
