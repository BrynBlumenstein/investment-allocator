import jwt from 'jsonwebtoken';
import config from '../config.js';

export const validateCredentials = (req, res, next) => {
	const { username, password } = req.body;

	if (!username || !password) {
		return res.status(400).json({ error: 'Missing username or password' });
	}

	const usernameRegex = /^[a-zA-Z0-9._]{3,20}$/;
	if (!usernameRegex.test(username)) {
		return res.status(400).json({ error: 'Invalid username' });
	}

	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,50}$/;
	if (!passwordRegex.test(password)) {
		return res.status(400).json({ error: 'Invalid password' });
	}

    next();
};

export const authenticate = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		return res.status(401).json({ error: 'Missing or invalid token' });
	}

	const token = authHeader.split(' ')[1];

	try {
		const payload = jwt.verify(token, config.jwtSecret);
		req.user = payload;
		next();
	} catch (err) {
		return res.status(401).json({ error: 'Invalid or expired token' });
	}
};
