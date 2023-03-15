const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.GOOGLE_MAP_API_KEY;

const findNearBy = async (req, res) => {
  let { location, category } = req.body;

  if (!location || !category)
    return res
      .status(404)
      .json({ message: "No location or category provided" });

  try {
    location = location.replace(", ", "%2C");
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=20000&keyword=${category}&key=${apiKey}
`
    );

    res.status(200).json({ results: data.results });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const getPlaceData = async (req, res) => {
  const { placeId } = req.params;

  if (!placeId)
    return res.status(400).json({ message: "Please provide a photo refrance" });

  try {
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
    );

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { findNearBy, getPlaceData };
