const express = require("express");
const userRouter = express.Router();
const { createUser, updateChecklist, login } = require("../controllers/userController");




userRouter.post("/register", createUser);
userRouter.post("/updateList", updateChecklist);
userRouter.post("/login", login);

module.exports = userRouter;
