const PostRepository = require("../repositories/posts_repository");

class PostService {
  postRepository = new PostRepository();
  getAllPosts = async () => {
    try {
      const allPost = await this.postRepository.getAllPosts();

      allPost.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });

      return allPost;
    } catch (err) {
      throw err;
    }
  };

  createPost = async ({ user, title, content }) => {
    try {
      const createdPost = await this.postRepository.createPost({
        user,
        title,
        content,
      });

      return createdPost;
    } catch (err) {
      throw err;
    }
  };

  getPostById = async ( postId ) => {
    try {
      const createdPost = await this.postRepository.getPostById( postId );

      return createdPost;
    } catch (err) {
      throw err;
    }
  };

}

module.exports = PostService;
