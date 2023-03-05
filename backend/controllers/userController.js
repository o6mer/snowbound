const db = require("../models/dbModel");
const format = require('pg-format');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const createUser = async (req, res) => {
    const { email, firstname, lastname, username, password } = req.body;
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
        return res.status(201).json({ user: rows[0] });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error creating user" });
    }
};


const updateChecklist = async (req, res) => {
    const { owner: owner, values: values } = req.body;
    if (!values) return res.status(400).json({ message: "values not provided" });
    try {
        const setValues = Object.keys(values).map(key => format('%I=%L', key, values[key])).join(", ");
        const { rows } = await db.query(format(`UPDATE checklist SET ${setValues} WHERE owner = %L RETURNING *`, owner));
        res.status(200).json(rows);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err.message });
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { rows } = await db.query(
            `SELECT * FROM users WHERE email = $1`, [email]
        );
        const user = rows[0];
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        return res.status(200).json({ message: "Logged in successfully" });
    } catch (err) {
        console.log(err);
        return res.status(404).json({ message: err.message });
    }
};








module.exports = {
    createUser,
    updateChecklist,
    login

};