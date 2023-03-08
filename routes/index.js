const express = require("express");
const router = express.Router();

const postRouter = require("./posts_routes");
router.use("/", postRouter);
const usersRouter = require("./users_routes");
router.use("/user", usersRouter);

module.exports = router;
