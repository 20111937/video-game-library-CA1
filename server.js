'use strict';

import express from 'express';
import session from "express-session";
import routes from "./routes.js";
import logger from "./utils/logger.js";
import { create } from 'express-handlebars';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "videogamelibrarysecret",
  resave: false,
  saveUninitialized: true,
}));

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

const handlebars = create({ extname: '.hbs' });
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use("/", routes);

app.listen(PORT, () => logger.info(`Your app is listening on port ${PORT}`));
