const { Posts } = require("../models");
// const { Comments } = require("../models");
const { Likes } = require("../models"); 

class PostRepository {
  getAllPosts = async () => {
    try {
      const posts = await Posts.findAll();

      return posts;
    } catch (err) {
      throw err;
    }
  };

  createPost = async ({ user, title, content }) => {
    try {
      console.log({ user, title, content })
      const createdPost = await Posts.create({
        user,
        title,
        content,
        likeSum: 0,
      });

      return createdPost;
    } catch (err) {
      throw err;
    }
  };

  getPostById = async (postId) => {
    try {
      const post = await Posts.findByPk(postId);

      return post;
    } catch (err) {
      throw err;
    }
  };

  updatePost = async (postId, title, content) => {
    try {
      const updatePostData = await Posts.update(
        { title, content },
        { where: { postId } }
      );

      return updatePostData;
    } catch (err) {
      throw err;
    }
  };

  deletePost = async (postId) => {
    try {
      await Posts.destroy({ where: { postId } });

      return "게시글이 삭제되었습니다.";
    } catch(err) {
      throw err;
    }
  };

  // createLike = async (postId, user) => {
  //   try {
  //     const createLike = await Likes.create({ user: user, like: postId });
  //     return createLike
  //   } catch(err){
  //     console.log("라이크 디비 생성문제")
  //     throw err;
  //   }
  // };

  // countLike = async (postId) => {
  //   try {
    //   const countLike = await Posts.increment(
    //     { likeSum: 1 },
    //     { where: { postId: postId } }
    //   );
    //   return countLike;
  //   } catch(err) {
  //     console.log("포스 디비 좋아요수 증가문제")
  //     throw err;
  //   }
  // };

  // deleteLike = async (postId, user) => {
  //   try {
    //   const deleteLike = await Likes.destroy({
    //     where: { user: user, like: postId },
    //   });
    //   return deleteLike;
  // } catch(err) {
  //   console.log("라이크 디비 삭제문제")
  //   throw err;
  // }
  // };
  // discountLike = async (postId) => {
  //   try{
    //   const discountLike = await Posts.decrement(
    //     { likeSum: 1 },
    //     { where: { postId: postId } }
    //   );
    //   return discountLike;
  //   } catch (err){
  //     console.log("포스 디비 좋아요수 감소문제")
  //     throw err;
  //   }
  // };
  

}

module.exports = PostRepository;
