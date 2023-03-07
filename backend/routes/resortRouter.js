const express = require("express");
const resortRouter = express.Router();
const { getResortByBame, updateResort, getMultipleResortByBame, getResortByCountry, deleteResortByBame, createResort } = require("../controllers/resortController");

resortRouter.get("/find/:name", getResortByBame);
resortRouter.get("/find/country/:country", getResortByCountry);
resortRouter.post("/compare", getMultipleResortByBame);
resortRouter.delete("/delete/:name", deleteResortByBame);
resortRouter.post("/create", createResort);
resortRouter.post("/update", updateResort);


module.exports = resortRouter;
