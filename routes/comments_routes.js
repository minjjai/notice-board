const express = require('express');
const router = express.Router();
// const authMiddleware = require("../middlewares/auth_middleware.js");

const CommentController = require('../controllers/comments_controller');
const commentController = new CommentController();

router.post("/:postId", commentController.createComment);
router.put("/:commentId", commentController.updateComment);
router.delete("/:commentId", commentController.deleteComment);

module.exports = router;