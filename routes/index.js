const express = require("express");
const router = express.Router();

const postRouter = require("./posts_routes");
router.use("/", postRouter);
const usersRouter = require("./users_routes");
router.use("/user", usersRouter);
const commentRouter = require("./comments_routes");
router.use("/comment", commentRouter);

module.exports = router;
