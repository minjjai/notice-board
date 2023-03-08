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
      const { user } = res.locals.user;
      const { title, content } = req.body;
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

  getPostById = async (req, res, next) => {
    try {
      const { postId } = req.params;
      const post = await this.postService.getPostById( postId );
      res.json({ data: post });
    } catch (err) {
      console.log(err);
      res.json({ data: false})
    }
  }

  updatePost = async (req, res, next) => {
    try{
    const { postId } = req.params;
    console.log({postId});
    const { title, content } = req.body;
    const user = res.locals.user.user;

    const updatePost = await this.postService.updatePost(
      postId,
      user,
      title,
      content
    );

    res.json({ data: updatePost });
    } catch (err){
      console.log(err);
      res.json({ data: false})
    }
  };

  deletePost = async (req, res, next) => {
    try{
    const { postId } = req.params;
    const user = res.locals.user.user;

    const deletePost = await this.postService.deletePost(postId, user);

    res.json({ data: deletePost });
    } catch(err) {
      console.log(err);
      res.json({data : false})
    }
  };


}

module.exports = PostController;
