const PostService = require("../services/posts_service");

class PostsController {
  postsService = new PostService();

  getAllPosts = async (req, res, next) => {
    try {
      const posts = await this.postsService.getAllPosts();

      res.status(200).json({ data: posts });
    } catch (err) {
      console.log(error);
      res.json({ data: false });
    }
  };
}

module.exports = PostsController;
