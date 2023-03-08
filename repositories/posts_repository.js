const { Posts } = require("../models");
const { Comments } = require("../models");
// const { Likes } = require("../models"); //포스트 테이블에 라이크까지 조인해보자..

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

}

module.exports = PostRepository;
