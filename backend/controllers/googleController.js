const axios = require("axios");

const findNearBy = async (req, res) => {
  const { location, category } = req.body;
  const apiKey = process.env.GOOGLE_MAP_API_KEY;
  console.log(category);
  try {
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=1500&type=${category}&keyword=cruise&key=${apiKey}`
    );
    // console.log(data.results);

    res.status(200).json({ results: data.results });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = { findNearBy };
