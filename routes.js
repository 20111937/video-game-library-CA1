'use strict';

import dashboard from "./controllers/dashboard.js";
import category from "./controllers/category.js";
import express from 'express';
import logger from "./utils/logger.js";
import about from "./controllers/about.js";
import start from './controllers/start.js';
import accounts from "./controllers/accounts.js";

const router = express.Router();

router.get('/', start.createView);

router.get("/signup", accounts.signupView);
router.post("/signup", accounts.signup);
router.get("/login", accounts.loginView);
router.post("/login", accounts.login);
router.get("/logout", accounts.logout);

router.get("/dashboard", dashboard.createView);

router.get("/category/:id", category.createView);
router.post("/category/:id/addgame", category.addGame);
router.get("/category/:id/deletegame/:gameindex", category.deleteGame);
router.get("/category/:id/editgame/:gameindex", category.editGameView);
router.post("/category/:id/updategame/:gameindex", category.updateGame);
router.get("/category/:id/sortname", category.sortByName);
router.get("/category/:id/sortyear", category.sortByYear);
router.post("/category/:id/search", category.searchGames);

router.get("/about", about.createView);

router.post("/dashboard/addcategory", dashboard.addCategory);
router.get("/dashboard/deletecategory/:id", dashboard.deleteCategory);

export default router;
