const db = require("../models/dbModel");
const format = require("pg-format");
const getResortByName = async (req, res) => {
  const { name } = req.params;

  if (!name) return res.status(400).json({ message: "name not provided" });

  try {
    const { rows } = await db.query("SELECT * FROM resort WHERE name = $1", [
      name,
    ]);
    const { rows: rows2 } = await db.query(
      format("SELECT * FROM img WHERE owner = %L", name)
    );
    const { rows: rows3 } = await db.query(
      format("SELECT * FROM review WHERE resort_id = %L ", name)
    );
    const promises = rows3.map((review) =>
      db.query(
        format("SELECT * FROM reviewimg WHERE review = %L", review.id)
      ).then(({ rows: reviewimgRows }) => {
        return {
          ...review,
          reviews: reviewimgRows,
        };
      })
    );
    const rows4 = await Promise.all(promises);
    const answer = {
      resort: rows[0],
      images: rows2,
      reviews: rows4,
    };
    console.log(rows, rows2);
    res.status(200).json(answer);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};
const getMultipleResortByName = async (req, res) => {
  const { names } = req.body;

  if (!names || !Array.isArray(names)) {
    return res.status(400).json({ message: "names not provided or invalid" });
  }

  try {
    const { rows } = await db.query(
      format(`SELECT * FROM resort WHERE name IN %L`, [names])
    );
    const { rows: rows2 } = await db.query(
      format(`SELECT * FROM img WHERE owner IN %L`, [names])
    );
    const { rows: rows3 } = await db.query(
      format(`SELECT * FROM review WHERE resort_id IN %L`, [names])
    );
    const promises = rows3.map((review) =>
      db.query(
        format(`SELECT * FROM reviewimg WHERE review = %L`, review.id)
      ).then(({ rows: reviewimgRows }) => {
        return {
          ...review,
          reviews: reviewimgRows,
        };
      })
    );
    const rows4 = await Promise.all(promises);
    const answer = {
      resort: rows,
      images: rows2,
      reviews: rows4,
    };
    res.status(200).json(answer);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getResortByCountry = async (req, res) => {
  const country = req.params.country;
  console.log(country);

  if (!country) return res.status(400).json({ message: "name not provided" });

  try {
    const { rows } = await db.query(
      "SELECT * FROM resort WHERE country_id = $1",
      [country]
    );

    console.log("Rows:", rows);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};
const deleteResortByName = async (req, res) => {
  const { name } = req.params;

  if (!name) return res.status(400).json({ message: "name not provided" });

  try {
    const { rows } = await db.query("DELETE FROM resort WHERE name = $1", [
      name,
    ]);
    const { rows: rows2 } = await db.query("DELETE FROM img WHERE owner = $1", [
      name,
    ]);

    console.log(rows);
    res.status(200).json({ message: "DELETED" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
    alert("Error deleting resort");
  }
};
const createResort = async (req, res) => {
  const resort = req.body.resort;
  const imgs = req.body.img;
  if (!resort) return res.status(400).json({ message: "names not provided" });
  try {
    const { rows } = await db.query(
      format(
        "INSERT INTO resort (%I) VALUES (%L)",
        Object.keys(resort),
        Object.values(resort)
      )
    );
    console.log(rows);
    const promises = imgs.map((link) => {
      return db.query(
        format(
          "INSERT INTO img (link, owner) VALUES (%L, %L)",
          link,
          resort.name
        )
      );
    });
    await Promise.all(promises);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

const updateResort = async (req, res) => {
  const { name: qName, values: resort, images } = req.body;
  if (!resort) return res.status(400).json({ message: "values not provided" });
  try {
    const setValues = Object.keys(resort)
      .map((key) => format("%I=%L", key, resort[key]))
      .join(", ");
    const { rows } = await db.query(
      format(
        `UPDATE resort SET ${setValues} WHERE name = %L RETURNING *`,
        qName
      )
    );
    await db.query("DELETE  from img where owner = $1", [qName]);
    const promises = images.map((link) => {
      return db.query(
        format("INSERT INTO img (link, owner) VALUES (%L, %L)", link, qName)
      );
    });
    await Promise.all(promises);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

const getAllResorts = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM resort");
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

const getAllCountry = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM country");
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

const getCountryByContinent = async (req, res) => {
  const { continent } = req.body;
  console.log(continent);
  try {
    const { rows } = await db.query(
      "SELECT * FROM country where continent_id = $1",
      [continent]
    );
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getResortByCountry,
  getMultipleResortByName,
  getResortByName,
  deleteResortByName,
  createResort,
  updateResort,
  getAllResorts,
  getAllCountry,
  getCountryByContinent,
};
