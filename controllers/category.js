"use strict";

import logger from "../utils/logger.js";
import games from "../models/games.json" with { type: "json" };

const category = {
  createView(request, response) {
    const categoryId = request.params.id;
    logger.info(`Category page loading: ${categoryId}`);

    const selectedCategory = games.categories.find(
      (category) => category.id === categoryId
    );

    if (!selectedCategory) {
      return response.status(404).send("Category not found");
    }

    const viewData = {
      title: selectedCategory.title,
      id: "dashboard",
      games: selectedCategory.games,
    };

    response.render("category", viewData);
  },

  addGame(request, response) {
    const categoryId = request.params.id;

    const selectedCategory = games.categories.find(
      (category) => category.id === categoryId
    );

    const newGame = {
      name: request.body.name,
      developer: request.body.developer,
      year: request.body.year,
      platform: request.body.platform,
    };

    selectedCategory.games.push(newGame);

    response.redirect("/category/" + categoryId);
  },
};

export default category;
