const db = require("../models/dbModel");

const getResortByBame = async (req, res) => {
  const { name } = req.params;

  if (!name) return res.status(400).json({ message: "name not provided" });

  try {
    const { rows } = await db.query("SELECT * FROM resort WHERE name = $1", [
      name,
    ]);

    console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

const getMultipleResortByBame = async (req, res) => {};

exports.getResortByBame = getResortByBame;
