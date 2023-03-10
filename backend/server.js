const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const reviewRouter = require("./routes/reviewRouter");
const resortRouter = require("./routes/resortRouter");
const userRouter = require("./routes/userRouter");
const googleRouter = require("./routes/googleRouter");
const favoriteRouter = require("./routes/favoriteRouter");

const PORT = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/review", reviewRouter);
app.use("/api/resort", resortRouter);
app.use("/api/user", userRouter);
app.use("/api/google", googleRouter);
app.use("/api/favorite", favoriteRouter);
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
