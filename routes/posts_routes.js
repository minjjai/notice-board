const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth_middleware.js");

const PostController = require("../controllers/posts_controller");
const postController = new PostController();
router.get("/", postController.getAllPosts);
router.post("/post", authMiddleware, postController.createPost);
router.get("/:postId", postController.getPostById);

module.exports = router;
