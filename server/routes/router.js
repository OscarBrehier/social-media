import express from "express";

import { login } from "./controllers/login.js";
import { register } from './controllers/register.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.sendStatus(200);
});

router.get('/login', login);
router.post('/register', register);

export default router;