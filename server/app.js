import express from 'express';
import cors from 'cors';
import config from './config.js';
import authRoutes from './routes/auth.js';

const app = express();

app.use(cors({ origin: config.clientUrl }));
app.use(express.json());

app.use('/api/auth', authRoutes);

export default app;
