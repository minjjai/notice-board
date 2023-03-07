const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth_middleware");

const CommentsController = require("../controllers/comments_controller");
const commentsController = new CommentsController();

router.get("/:postId", commentsController.getCommentsByPostId);
router.post("/:postId", authMiddleware, commentsController.createComment);
router.put("/:commentId", authMiddleware, commentsController.updateComment);
router.delete("/:commentId", authMiddleware, commentsController.deleteComment);

module.exports = router;
