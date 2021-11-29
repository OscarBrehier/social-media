import express from "express";
import { Status, Token, UserClass } from '../class/classes.js';
import { login, register, validate, user, send, production, verifyCode, checkVerified } from './controllers/routes.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.sendStatus(200);
});

// GET

router.get('/profile', user);
router.get('/production', production);
router.get('/check-verified', checkVerified);

// POST

router.post('/login', login);
router.post('/register', register);
router.post('/validate', validate);
router.post('/send', send);
router.post('/verify-code', verifyCode);

export default router;
export const status = new Status();
export const token = new Token();
export const users = new UserClass();