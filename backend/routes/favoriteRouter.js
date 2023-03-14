const express = require("express");
const favoriteRouter = express.Router();
const { createFavorite, deleteFavoriteById, } = require("../controllers/favoriteController")

favoriteRouter.post("/create", createFavorite)
favoriteRouter.post("/delete", deleteFavoriteById)

module.exports = favoriteRouter;
