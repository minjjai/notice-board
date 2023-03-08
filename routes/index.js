const express = require("express");
const router = express.Router();

const postRouter = require("./posts_routes");
router.use("/", postRouter);

module.exports = router;
