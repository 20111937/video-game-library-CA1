'use strict';

import dashboard from "./controllers/dashboard.js";
import category from "./controllers/category.js";
import express from 'express';
import logger from "./utils/logger.js";
import about from "./controllers/about.js";
import start from './controllers/start.js';

const router = express.Router();

router.get('/', start.createView);
router.get("/dashboard", dashboard.createView);

router.get("/category/:id", category.createView);
router.post("/category/:id/addgame", category.addGame);
router.get("/category/:id/deletegame/:gameindex", category.deleteGame);
router.get("/category/:id/editgame/:gameindex", category.editGameView);
router.post("/category/:id/updategame/:gameindex", category.updateGame);

router.get("/about", about.createView);

router.post("/dashboard/addcategory", dashboard.addCategory);
router.get("/dashboard/deletecategory/:id", dashboard.deleteCategory);

export default router;
