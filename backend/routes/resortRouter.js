const express = require("express");
const { getResortByBame } = require("../controllers/resortController");
const resortRouter = express.Router();

resortRouter.get("/:name", getResortByBame);

module.exports = resortRouter;
