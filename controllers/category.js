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
      id: categoryId,
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

  deleteGame(request, response) {
    const categoryId = request.params.id;
    const gameIndex = request.params.gameindex;

    const selectedCategory = games.categories.find(
      (category) => category.id === categoryId
    );

    selectedCategory.games.splice(gameIndex, 1);

    response.redirect("/category/" + categoryId);
  },

  editGameView(request, response) {
    const categoryId = request.params.id;
    const gameIndex = request.params.gameindex;

    const selectedCategory = games.categories.find(
      (category) => category.id === categoryId
    );

    const selectedGame = selectedCategory.games[gameIndex];

    const viewData = {
      title: "Edit Game",
      categoryId: categoryId,
      gameIndex: gameIndex,
      game: selectedGame,
    };

    response.render("editgame", viewData);
  },

  updateGame(request, response) {
    const categoryId = request.params.id;
    const gameIndex = request.params.gameindex;

    const selectedCategory = games.categories.find(
      (category) => category.id === categoryId
    );

    selectedCategory.games[gameIndex] = {
      name: request.body.name,
      developer: request.body.developer,
      year: request.body.year,
      platform: request.body.platform,
    };

    response.redirect("/category/" + categoryId);
  },

  sortByName(request, response) {
    const categoryId = request.params.id;

    const selectedCategory = games.categories.find(
      (category) => category.id === categoryId
    );

    selectedCategory.games.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    response.redirect("/category/" + categoryId);
  },

  sortByYear(request, response) {
    const categoryId = request.params.id;

    const selectedCategory = games.categories.find(
      (category) => category.id === categoryId
    );

    selectedCategory.games.sort((a, b) =>
      a.year - b.year
    );

    response.redirect("/category/" + categoryId);
  },
};

export default category;
