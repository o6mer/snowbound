const express = require("express");
const userRouter = express.Router();
const {
  createUser,
  updateChecklist,
  login,
  auth,
} = require("../controllers/userController");

userRouter.post("/register", createUser);
userRouter.post("/updateList", updateChecklist);
userRouter.post("/login", login);
userRouter.post("/auth", auth);

module.exports = userRouter;
