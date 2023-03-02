const express = require("express");
const resortRouter = express.Router();
const { getResortByBame, getMultipleResortByBame, getResortByCountry, deleteResortByBame, createResort } = require("../controllers/resortController");

resortRouter.get("/find/:name", getResortByBame);
resortRouter.get("/find/country/:country", getResortByCountry);
resortRouter.get("/compare", getMultipleResortByBame);
resortRouter.get("/delete/:name", deleteResortByBame);
resortRouter.post("/create", createResort);

module.exports = resortRouter;
