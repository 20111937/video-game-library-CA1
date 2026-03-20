"use strict";

import logger from "../utils/logger.js";
import games from "../models/games.json" with { type: "json" };

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");

    const viewData = {
      title: "Game Categories",
      categories: games.categories,
    };

    response.render("dashboard", viewData);
  },
};

export default dashboard;