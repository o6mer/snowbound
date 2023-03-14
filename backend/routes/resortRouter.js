const express = require("express");
const resortRouter = express.Router();
const { getResortByName, updateResort, getAllCountry, getMultipleResortByName, getResortByCountry, deleteResortByName, createResort, getAllResorts, getCountryByContinent } = require("../controllers/resortController");

resortRouter.get("/find/:name", getResortByName);
resortRouter.get("/get", getAllResorts);
resortRouter.get("/find/country/:country", getResortByCountry);
resortRouter.post("/countrybycont", getCountryByContinent);
resortRouter.post("/compare", getMultipleResortByName);
resortRouter.delete("/delete/:name", deleteResortByName);
resortRouter.post("/create", createResort);
resortRouter.post("/update", updateResort);
resortRouter.post("/getcountry", getAllCountry);
module.exports = resortRouter;
