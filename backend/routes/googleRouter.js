const express = require("express");
const { findNearBy } = require("../controllers/googleController");
const googleRouter = express.Router();

googleRouter.post("/find-nearby", findNearBy);

module.exports = googleRouter;
