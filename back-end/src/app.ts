import express from 'express';
import cors from 'cors';
import route from './routes';
import expressError from './middleware/expressError';

import 'express-async-errors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(route);

app.use(expressError);

export default app;
