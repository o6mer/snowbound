const express = require("express");
const resortRouter = express.Router();
const { getResortByBame, getMultipleResortByBame, getResortByCountry } = require("../controllers/resortController");

resortRouter.get("/find/:name", getResortByBame);
resortRouter.get("/find/country/:country", getResortByCountry);
resortRouter.get("/compare", getMultipleResortByBame);

module.exports = resortRouter;
