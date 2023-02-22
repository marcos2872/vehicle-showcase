import 'dotenv/config';
import app from './app';
import prisma from './Models/prisma';

const PORT = process.env.PORT || 5180;
prisma.$connect().then(() => {
  console.log('db connected');
}).catch((error: any) => {
  console.log('db not connected');
  console.log((error as Error).message);
});
app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
