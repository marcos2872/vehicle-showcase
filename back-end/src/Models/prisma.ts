import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const url = process.env.DATABASE_URL;

const prisma = new PrismaClient({ datasources: { db: { url } } });

export default prisma;
