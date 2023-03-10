const { Comments } = require("../models");

class CommentRepository {

//   findCommentsByPostId = async ({postId}) => {
//     try{
//         const comments = await Comments.findAll({ where: { postId } });

//         return comments;
//     } catch(err){
//         throw err;
//     }
//   };

  findCommentById = async ({commentId}) => {
    try{
        const comment = await Comments.findByPk(commentId);

        return comment;
    } catch(err){ 
        throw err;
    }
  };

  getCommentsByPostId = async ({postId}) => {
    try{
        const comments = await Comments.findAll({ where: { postId } });

        return comments;
    } catch(err){ 
        throw err;
    }
  };

  createComment = async ({postId, content}) => {
    try{
        const createdCommentData = await Comments.create({
        postId, 
        content
        });

        return createdCommentData;
} catch(err){
    throw err;
}
  };

  updateComment = async ({commentId, content}) => {
    try{
        const updatedCommentData = await Comments.update(
        { content },
        { where: { commentId } }
        );

        return updatedCommentData;
    } catch(err){
        throw err;
    }
  };

  deleteComment = async ({commentId}) => {
    try{
        const deletedCommentData = await Comments.destroy({ where: { commentId } });

        return deletedCommentData
    } catch(err) {
        throw err;
    }
  };
}

module.exports = CommentRepository;
