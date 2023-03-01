const db = require("../models/dbModel");
const format = require('pg-format');

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

const getMultipleResortByBame = async (req, res) => {
  const { names } = req.body;

  
  if (!names) return res.status(400).json({ message: "names not provided" });

  try {
    const { rows } = await db.query(format(`SELECT * FROM resort WHERE name in %L`, [names]));
    console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

const getResortByCountry = async (req, res) => {
  const { resorts } = req.params;
  console.log(req.params)

  if (!resorts) return res.status(400).json({ message: "name not provided" });

  try {
    const { rows } = await db.query("SELECT * FROM resort WHERE countryId = $1", [
      resorts,
    ]);

    console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

exports.getResortByBame = getResortByBame;
exports.getMultipleResortByBame= getMultipleResortByBame;
exports.getResortByCountry=getResortByCountry;
