import express from 'express';
import cors from 'cors';
import route from './routes';
import 'express-async-errors';
import expressError from './middleware/expressError';

const app = express();
app.use(expressError);

app.use(express.json());
app.use(cors());
app.use(route);
app.use(express.static('public'));

app.use('/images', express.static('public'));

export default app;
