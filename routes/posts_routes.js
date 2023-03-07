const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth_middleware.js");

const PostsController = require("../controllers/posts_controller");
const postsController = new PostsController();

router.get("/", postsController.getPosts);
router.get("/:postId", postsController.getPostById);
router.post("/", authMiddleware, postsController.createPost);
router.put("/:postId", authMiddleware, postsController.updatePost);
router.delete("/:postId", authMiddleware, postsController.deletePost);
router.put("/:postId/like", authMiddleware, postsController.likePost);
// router.get("/like", authMiddleware, postsController.getLikedPosts);

module.exports = router;
