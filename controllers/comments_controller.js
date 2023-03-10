const CommentService = require("../services/comments_service")

class CommentController {
    commentService = new CommentService();

    createComment = async ( req, res, next ) => {
        try{
            const {content} = req.body;
            const { postId } = req.params;
            const createdComment = await this.commentService.createComment({
                postId, content
            });
            res.json({ data: createdComment })
        } catch(err){
            console.log(err);
            res.json({data: false})
        }

    }
    updateComment = async (req, res, next) => {
        try {
            const { commentId } = req.params;
            const { content } = req.body;
        
            const updateComment = await this.commentService.updateComment({
            commentId,
            content
        });
        
            res.json({ data: updateComment });
        } catch(err) {
            console.log(err);
            res.json({ data: false })
        }
      };
    
      deleteComment = async (req, res, next) => {
        try{
            const { commentId } = req.params;
        
            const deletePost = await this.commentService.deleteComment({
            commentId,
            });
        
            res.status(200).json({ data: deletePost });
        } catch(err){
            console.log(err);
            res.json({ data : false })
        }
      };
}
module.exports = CommentController;