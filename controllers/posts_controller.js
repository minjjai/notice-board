const PostService = require("../services/posts_service");

class PostController {
  postService = new PostService();

  getAllPosts = async (req, res, next) => { //어스미들웨어를 여기서 리콰이어 하면 좋아요한 여부 확인 가능? 좋아요한 postId는 true로..
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

  //댓글까지 보이게 수정해야함
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

  // 사용자가 좋아요를 누르기 전에 좋아요를 한 여부를 알아야할까 눌렀을때 이미눌렀다고 알려야할까...
  // likePost = async (req, res, next) => {
  //   try {
    //   const { postId } = req.params;
    //   const { like } = req.body;
    //   const user = res.locals.user.usre;

    //   const likePost = await this.postService.likePost(postId, like, user);
    //   res.json({ data: "success" });
  //   } catch (err){
  //     console.log(err);
  //     res.json({ data: false })
  //   }
  // };

}

module.exports = PostController;
