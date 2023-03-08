const CommentService = require("../services/comments_service")

class CommentController {
    commentService = new CommentService();

    createComment = async ( req, res, next ) => {
        try{
            const {content} = req.body;
            const { postId } = req.params;
            const { user } = res.locals.user;
            console.log({content, postId, user})

            const createdComment = await this.commentService.createComment({
                postId, user, content
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
            const { user } = res.locals.user;
            console.log({commentId}, 8888)
        
            const updateComment = await this.commentService.updateComment({
            commentId,
            user,
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
            const { user } = res.locals.user;
        
            const deletePost = await this.commentService.deleteComment({
            commentId,
            user
            });
        
            res.status(200).json({ data: deletePost });
        } catch(err){
            console.log(err);
            res.json({ data : false })
        }
      };
}
module.exports = CommentController;