import express from "express";
import Status from "../class/Status.js";

import { login } from "./controllers/login.js";
import { register } from './controllers/register.js';
import { generate } from "./controllers/generate.js";
import { production } from './controllers/production.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.sendStatus(200);
});

// GET

router.get('/login', login);
router.get('/generate?:author', generate);
router.get('/prod', production);

// POST

router.post('/register', register);

export default router;
export const status = new Status();