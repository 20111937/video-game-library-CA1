"use strict";

import logger from "../utils/logger.js";
import appInfo from "../models/app-info.json" with { type: "json" };
import games from "../models/games.json" with { type: "json" };

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const totalCategories = games.categories.length;
    const totalGames = games.categories.reduce((total, category) => total + category.games.length, 0);

    const viewData = {
      title: "About Video Game Library",
      author: "Kurtis Doyle Healy",
      email: "kurtis@gmail.com",
      location: "Ireland",
      info: {
        ...appInfo,
        categories: totalCategories,
        games: totalGames
      }
    };

    response.render("about", viewData);
  },
};

export default about;