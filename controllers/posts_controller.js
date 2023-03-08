const PostService = require("../services/posts_service");

class PostController {
  postService = new PostService();

  getAllPosts = async (req, res, next) => {
    try {
      const posts = await this.postService.getAllPosts();

      res.status(200).json({ data: posts });
    } catch (err) {
      console.log(err);
      res.json({ data: false });
    }
  };

  createPost = async (req, res, next) => {
    try {
      // const { user } = res.locals.user;
      const { user, title, content } = req.body;
      console.log(req.body)
      const createdPost = await this.postService.createPost({
        user,
        title,
        content,
      });
      res.json({ data: createdPost });
    } catch (err) {
      console.log(err);
      res.json({ data: false})
    }
  }


}

module.exports = PostController;
