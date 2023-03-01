const express = require("express");
const queryRouter = express.Router();

queryRouter.get("/compare/:query");

module.exports = queryRouter;
