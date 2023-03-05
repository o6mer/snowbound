const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const queryRouter = require("./routes/queryRouter");
const resortRouter = require("./routes/resortRouter");
const userRouter = require("./routes/userRouter");
const googleRouter = require("./routes/googleRouter");

const PORT = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());

app.use("/api/", queryRouter);
app.use("/api/resort", resortRouter);
app.use("/api/user", userRouter);
app.use("/api/google", googleRouter);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
