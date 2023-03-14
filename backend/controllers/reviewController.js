const db = require("../models/dbModel");
const format = require("pg-format");

const createReview = async (req, res) => {
    const review = req.body.review;
    const imgs = req.body.img;
    if (!review) return res.status(400).json({ message: "names not provided" });
    try {
        const { rows } = await db.query(
            format(
                "INSERT INTO review (%I) VALUES (%L) RETURNING *",
                Object.keys(review),
                Object.values(review)
            )
        );
        console.log(rows[0]);
        const promises = imgs.map((link) => {
            return db.query(
                format(
                    "INSERT INTO reviewimg (link, owner, review) VALUES (%L, %L, %L)",
                    link,
                    review.resort_id,
                    rows[0].id
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
const deleteReviewById = async (req, res) => {
    const { id } = req.body;

    if (!id) return res.status(400).json({ message: "id not provided" });

    try {
        const { rows } = await db.query("DELETE FROM review WHERE id = $1", [
            id,
        ]);
        const { rows: rows2 } = await db.query("DELETE FROM reviewimg WHERE review = $1", [
            id,
        ]);

        console.log(rows);
        console.log(rows2);
        res.status(200).json({ message: "DELETED" });
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err.message });
        alert("Error deleting");
    }
};

const upVote = async (req, res) => {
    const { id, username } = req.body;

    if (!id) return res.status(400).json({ message: "id not provided" });

    try {
        const { rows } = await db.query(
            "UPDATE review SET vote = vote + 1 WHERE id = $1 RETURNING *",
            [id]
        );
        await db.query(
            "INSERT INTO likes (review_id, username) VALUES ($1, $2)",
            [id, username]
        );

        res.status(200).json(rows);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err.message });
    }
}
const downVote = async (req, res) => {
    const { id, username } = req.body;
    if (!id) return res.status(400).json({ message: "id not provided" });

    try {
        const { rows } = await db.query(
            "UPDATE review SET vote = vote - 1 WHERE id = $1 RETURNING *",
            [id]
        );
        const { rowCount: deletedRows } = await db.query(
            "DELETE FROM likes WHERE review_id = $1 AND username = $2",
            [id, username]
        );
        if (deletedRows === 0) {
            await db.query("ROLLBACK");
            return res
                .status(404)
                .json({ message: "User has not liked this review" });
        }

        res.status(200).json(rows);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err.message });
    }

}
module.exports = {
    createReview,
    deleteReviewById,
    upVote,
    downVote
};
