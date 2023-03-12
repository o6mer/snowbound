const express = require("express");
const reviewRouter = express.Router();
const { createReview } = require("../controllers/reviewController")

reviewRouter.post("/create", createReview)


module.exports = reviewRouter;
