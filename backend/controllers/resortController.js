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
  const country = req.params.country;
  console.log(country);


  if (!country) return res.status(400).json({ message: "name not provided" });

  try {


    const { rows } = await db.query("SELECT * FROM resort WHERE country_id = $1", [
      country,
    ]);

    console.log("Rows:", rows);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};
const deleteResortByBame = async (req, res) => {
  const { name } = req.params;

  if (!name) return res.status(400).json({ message: "name not provided" });

  try {
    const { rows } = await db.query("DELETE FROM resort WHERE name = $1", [
      name,
    ]);

    console.log(rows);
    res.status(200).json("DELETED", rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};
const createResort = (req, res) => {
  const resort = req.body;
  if (!resort) return res.status(400).json({ message: "names not provided" });
  try {
    const { rows } = db.query(format("INSERT INTO resort (%I) VALUES (%L)", Object.keys(resort), Object.values(resort)));
    console.log(rows);
    res.status(200).json(rows);

  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
}
// const updateResort = (req, res) => {
//   console.log("this is:", req.body.name)
//   const resort = req.body.values;
//   qName = req.body.name.name;
//   if (!resort) return res.status(400).json({ message: "names not provided" });
//   try {
//     const { rows } = db.query(format(`UPDATE resort SET (%I) VALUES (%L) WHERE name=${qName}`, Object.keys(resort), Object.values(resort)));
//     console.log(rows);
//     res.status(200).json(rows);

//   } catch (err) {
//     console.log(err);
//     res.status(404).json({ message: err.message });
//   }
// }
const updateResort = async (req, res) => {
  console.log("this is:", req.body.name)
  const resort = req.body.values;
  const qName = req.body.name.name;
  if (!resort) return res.status(400).json({ message: "names not provided" });
  try {
    const keys = Object.keys(resort);
    const values = Object.values(resort);
    const columns = keys.map((key) => format("%I = %L", key, resort[key])).join(", ");
    const query = format(`UPDATE resort SET ${columns} WHERE name = %L RETURNING *`, qName);
    const { rows } = await db.query(query);
    console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
}


module.exports = {
  getResortByCountry,
  getMultipleResortByBame,
  getResortByBame,
  deleteResortByBame,
  createResort,
  updateResort
};