const express = require("express");
const reviewRouter = express.Router();
const { createReview, deleteReviewById, upVote, downVote } = require("../controllers/reviewController")

reviewRouter.post("/create", createReview)
reviewRouter.post("/delete", deleteReviewById)
reviewRouter.post("/upvote", upVote)
reviewRouter.post("/downvote", downVote)


module.exports = reviewRouter;
