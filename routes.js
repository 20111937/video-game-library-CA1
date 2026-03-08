'use strict';
import dashboard from "./controllers/dashboard.js";
import category from "./controllers/category.js";
import express from 'express';
import logger from "./utils/logger.js";
import about from "./controllers/about.js";

const router = express.Router();

// add your own routes below

import start from './controllers/start.js';
router.get('/', start.createView);
router.get("/dashboard", dashboard.createView);
router.get("/category/:id", category.createView);
router.get("/about", about.createView);



export default router;
