import { Router } from 'express';
import multer from 'multer';
import config from '../utils/config';
import CarControler from '../Controllers/CarControler';
import UserContoller from '../Controllers/UserController';
import validateToken from '../middleware/validateToken';
import authUser from '../middleware/authUser';

const route = Router();

const carControler = new CarControler();
route.delete('/car/:id', validateToken, authUser, carControler.deleteCar);
route.get('/cars?:id', carControler.findCars);
route.put('/car/:id', validateToken, authUser, carControler.updateCar);
route.post('/car', validateToken, authUser, multer(config).array('images'), carControler.createCar);

const userController = new UserContoller();

route.post('/login', userController.userLogin);
route.post('/user', userController.userCreate);

export default route;
