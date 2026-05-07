"use strict";

import logger from "../utils/logger.js";
import users from "../models/users.json" with { type: "json" };

const accounts = {

  signupView(request, response) {
    response.render("signup", {
      title: "Sign Up",
      user: request.session.user,
    });
  },

  loginView(request, response) {
    response.render("login", {
      title: "Login",
      user: request.session.user,
    });
  },

  signup(request, response) {
    const newUser = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
    };

    users.users.push(newUser);

    logger.info("New user created");

    response.redirect("/login");
  },

  login(request, response) {
    const email = request.body.email;
    const password = request.body.password;

    const existingUser = users.users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (existingUser) {
      request.session.user = existingUser;

      logger.info("User logged in");

      response.redirect("/dashboard");
    } else {
      response.redirect("/login");
    }
  },

  logout(request, response) {
    request.session.destroy();

    response.redirect("/");
  },
};

export default accounts;
