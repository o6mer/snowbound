const express = require("express");
const { findNearBy, getPlaceData } = require("../controllers/googleController");
const googleRouter = express.Router();

googleRouter.post("/find-nearby", findNearBy);
googleRouter.post("/get-place/:placeId", getPlaceData);

module.exports = googleRouter;
