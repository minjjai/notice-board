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
    } catch (error) {
      throw error;
    }
  };
}

module.exports = PostRepository;
