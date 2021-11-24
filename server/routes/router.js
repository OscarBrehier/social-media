import express from "express";
import Status from "../class/Status.js";
import Token from "../class/Token.js";

import { login } from "./controllers/login.js";
import { register } from './controllers/register.js';
import { generate } from "./controllers/generate.js";
import { production } from './controllers/production.js';
import { validate } from './controllers/validate.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.sendStatus(200);
});

// GET

router.get('/generate?:author', generate);
router.get('/prod', production);

// POST

router.post('/login', login);
router.post('/register', register);
router.post('/validate', validate);

export default router;
export const status = new Status();
export const token = new Token();