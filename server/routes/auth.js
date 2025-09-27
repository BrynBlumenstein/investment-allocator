import express from 'express';
import { signUp, signIn, me } from '../controllers/auth.js';
import { validateCredentials, authenticate } from '../middleware/auth.js';

const router = express.Router();

router.post('/sign-up', validateCredentials, signUp);

router.post('/sign-in', validateCredentials, signIn);

router.get('/me', authenticate, me);

export default router;
