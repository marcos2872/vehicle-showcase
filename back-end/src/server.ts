import 'dotenv/config';
import app from './app';
import prisma from './Models/prisma';

const PORT = process.env.PORT || 5180;
prisma.$connect().then(() => {
  console.log('db connected');
}).catch(() => {
  console.log('db not connected');
});
app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
