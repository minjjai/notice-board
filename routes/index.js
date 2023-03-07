const express = require("express");
const router = express.Router();

const postsRouter = require("./posts_routes");
router.use("/posts", postsRouter);
const commentsRouter = require("./comments_routes");
router.use("/comments", commentsRouter);
const usersRouter = require("./users_routes");
router.use("/users", usersRouter);

module.exports = router;
