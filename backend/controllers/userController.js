const db = require("../models/dbModel");
const format = require("pg-format");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const createUser = async (req, res) => {
  const { email, firstname, lastname, password, username } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insert user into database
    const { rows } = await db.query(
      format(
        "INSERT INTO users (email, firstname, lastname, username, password) VALUES (%L, %L, %L, %L, %L) RETURNING *",
        email,
        firstname,
        lastname,
        username,
        hashedPassword
      )
    );
    await db.query(format("INSERT INTO checklist (owner) VALUES (%L)", email));

    const { admin } = rows[0];

    const token = jwt.sign(
      {
        email,
        username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res
      .status(201)
      .json({ user: { admin, username }, token, message: "User Created" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error creating user" });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { rows } = await db.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);
    const user = rows[0];
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      {
        email: user.email,
        username: user.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({
      user: { admin: user.admin, username: user.username },
      token,
      message: "Logged in successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: err.message });
  }
};
const updateChecklist = async (req, res) => {
  const { owner: owner, values: values } = req.body;
  if (!values) return res.status(400).json({ message: "values not provided" });
  try {
    const setValues = Object.keys(values)
      .map((key) => format("%I=%L", key, values[key]))
      .join(", ");
    const { rows } = await db.query(
      format(
        `UPDATE checklist SET ${setValues} WHERE owner = %L RETURNING *`,
        owner
      )
    );
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

const auth = async (req, res) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  const token = authorizationHeader.split(" ")[1];

  try {
    const user = await checkToken(token);

    // If the user is not found, return a 401 status
    if (!user) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    // If the user is found, return the user data
    const { username, admin } = user;

    res.status(200).json({ user: { username, admin } });
  } catch (error) {
    // If the token is invalid, return a 401 status
    return res.status(401).send({ message: "Unauthorized" });
  }
};

const checkToken = async (token) => {
  try {
    if (!token) return;

    const { email } = jwt.verify(token, process.env.JWT_SECRET);

    const { rows } = await db.query(`SELECT * FROM users WHERE email = $1`, [
      email,
    ]);
    const user = rows[0];

    return user;
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      console.log("Token expired");
    } else {
      console.error(err);
    }
  }
};

module.exports = {
  createUser,
  updateChecklist,
  login,
  auth,
};
