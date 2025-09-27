import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config.js';
import prisma from '../prisma-client.js';

const ONE_DAY = 60 * 60 * 24;

export const signUp = async (req, res) => {
	const { username, password } = req.body;

	const existingUser = await prisma.user.findUnique({
		where: { username }
	});

	if (existingUser) {
		return res.status(400).json({ error: 'Username already taken' });
	}

	const saltRounds = 10;
	const hashedPassword = await bcrypt.hash(password, saltRounds);

	const user = await prisma.user.create({
		data: {
			username,
			passwordHash: hashedPassword
		}
	});

	const { passwordHash, ...userData } = user;
	res.status(201).json(userData);
};

export const signIn = async (req, res) => {
	const { username, password } = req.body;

	const user = await prisma.user.findUnique({
		where: { username }
	});

	if (!(user && (await bcrypt.compare(password, user.passwordHash)))) {
		return res.status(401).json({ error: 'Invalid username or password' });
	}

	const { passwordHash, ...userData } = user;

	const token = jwt.sign(userData, config.jwtSecret, {
		expiresIn: ONE_DAY
	});

	res.json({ token });
};

export const me = async (req, res) => {
	const user = await prisma.user.findUnique({
		where: { id: req.user.id },
		select: { id: true, username: true, allocations: true }
	});

	res.json(user);
};
