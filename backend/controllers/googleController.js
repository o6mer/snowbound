const axios = require("axios");

const findNearBy = async (req, res) => {
  let { location, category } = req.body;

  if (!location || !category)
    return res
      .status(404)
      .json({ message: "No location or category provided" });

  try {
    const apiKey = process.env.GOOGLE_MAP_API_KEY;
    location = location.replace(", ", "%2C");
    console.log({ location, category, apiKey });
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=20000&keyword=${category}&key=${apiKey}
`
    );

    console.log(data);

    res.status(200).json({ results: data.results });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = { findNearBy };
