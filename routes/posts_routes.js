const express = require("express");
const router = express.Router();
// const authMiddleware = require("../middlewares/auth_middleware.js");

const PostController = require("../controllers/posts_controller");
const postController = new PostController();
router.get("/get", postController.getAllPosts);
router.post("/post", postController.createPost);
router.get("/:postId", postController.getPostById);
router.put("/:postId", postController.updatePost);
router.delete("/:postId", postController.deletePost);
// router.put("/:postId/like", authMiddleware, postsController.likePost);

module.exports = router;
