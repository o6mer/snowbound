const express = require("express");
const userRouter = express.Router();
const {
  createUser,
  updateChecklist,
  login,
  auth,
  getMyInfo,
  updateUserInfo,
} = require("../controllers/userController");

userRouter.post("/register", createUser);
userRouter.post("/updateList", updateChecklist);
userRouter.post("/login", login);
userRouter.post("/auth", auth);
userRouter.post("/profile/:username", getMyInfo);
userRouter.post("/update", updateUserInfo);

module.exports = userRouter;
