const CommentRepository = require("../repositories/comments_repository")

class CommentService {
    commentRepository = new CommentRepository()
    createComment = async ({postId, user, content}) => {
    try{
        const createdCommentData = await this.commentRepository.createComment({
          postId,
          user,
          content
         });
         return {
            commentId: createdCommentData.commentId,
            postId,
            user,
            content,
            createdAt: createdCommentData.createdAt,
            updatedAt: createdCommentData.updatedAt,
          };
    } catch(err){
        throw err;
    }
};

updateComment = async ({commentId, user, content}) => {
    try{
    await this.commentRepository.updateComment({commentId, user, content});

    const findComment = await this.commentRepository.findCommentById({commentId});
    if (!findComment) return ("Comment doesn't exist");
    if (findComment.user !== user) {
      return "권한이 없습니다."; //본인이 쓴거 아니면 아예 삭제 버튼이 없는거 만들고싶다
    }
    return findComment;
} catch(err){
    throw err;
}
  };

  deleteComment = async ({commentId, user}) => {
    try{
        const findComment = await this.commentRepository.findCommentById({commentId});
        if (!findComment) throw new Error("Comment doesn't exist");
        if (findComment.user !== user) {
        return "권한이 없습니다.";
        }
        await this.commentRepository.deleteComment({commentId});

        return findComment;
    } catch(err){
        throw err;
    }
  };
}
module.exports = CommentService;