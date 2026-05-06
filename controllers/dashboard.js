"use strict";

import { v4 as uuidv4 } from "uuid";

import logger from "../utils/logger.js";
import games from "../models/games.json" with { type: "json" };

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");

    const viewData = {
      title: "Game Categories",
      id: "dashboard",
      categories: games.categories,
    };

   response.render("dashboard", viewData);
},

addCategory(request, response) {

  const newCategory = {
    id: uuidv4(),
    title: request.body.title,
    games: []
  };

  games.categories.push(newCategory);

  response.redirect("/dashboard");
},
"use strict";

import { v4 as uuidv4 } from "uuid";
import logger from "../utils/logger.js";
import games from "../models/games.json" with { type: "json" };

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");

    const viewData = {
      title: "Game Categories",
      id: "dashboard",
      categories: games.categories,
    };

    response.render("dashboard", viewData);
  },

  addCategory(request, response) {
    const newCategory = {
      id: uuidv4(),
      title: request.body.title,
      games: [],
    };

    games.categories.push(newCategory);

    response.redirect("/dashboard");
  },

  deleteCategory(request, response) {
    const categoryId = request.params.id;

    const index = games.categories.findIndex(
      (category) => category.id === categoryId
    );

    if (index !== -1) {
      games.categories.splice(index, 1);
    }

    response.redirect("/dashboard");
  },
};

export default dashboard;
