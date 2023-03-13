const db = require("../models/dbModel");
const format = require("pg-format");
const createFavorite = async (req, res) => {
    try {
        const { resort_id, username } = req.body;
        const result = await db.query(format("INSERT INTO favorite (resort_id,owner) VALUES (%L, %L) ", resort_id, username));
        res.status(200).json(result.rows);

    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}
const deleteFavoriteById = async (req, res) => {
    const { id } = req.body;

    if (!id) return res.status(400).json({ message: "id not provided" });

    try {
        const { rows } = await db.query("DELETE FROM favorite WHERE id = $1", [
            id,
        ]);
        res.status(200).json({ message: "DELETED" });
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err.message });
        alert("Error deleting");
    }
};
module.exports = {
    createFavorite,
    deleteFavoriteById
};
