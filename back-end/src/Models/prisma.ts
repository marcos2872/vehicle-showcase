import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const url = process.env.DATABASE_URL || 'mysql://root:123456@localhost:3306/verzel?schema=public';

const prisma = new PrismaClient({ datasources: { db: { url } } });

export default prisma;
