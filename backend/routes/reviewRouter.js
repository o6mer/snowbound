const express = require("express");
const reviewRouter = express.Router();
const { createReview, deleteReviewById } = require("../controllers/reviewController")

reviewRouter.post("/create", createReview)
reviewRouter.post("/delete", deleteReviewById)


module.exports = reviewRouter;
