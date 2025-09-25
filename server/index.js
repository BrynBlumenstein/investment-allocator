import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

dotenv.config();
const PORT = process.env.PORT || 3001;
const CLIENT_URL = `${process.env.CLIENT_URL}`;
const NODE_ENV = `${process.env.NODE_ENV}`;

const app = express();

app.use(cors({ origin: CLIENT_URL }));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	console.log(`Environment: ${NODE_ENV}`);
});
