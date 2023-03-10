const PostRepository = require("../repositories/posts_repository");
const CommentRepository = require("../repositories/comments_repository")

class PostService {
  postRepository = new PostRepository();
  commentRepository = new CommentRepository()

  getAllPosts = async () => { 
    try {
      const allPosts = await this.postRepository.getAllPosts();

      allPosts.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });

      return allPosts;
    } catch (err) {
      throw err;
    }
  };
  // getAllPostsCheckedLikes = async (userId) => {
  //   try {
  //     const allPosts = await this.postRepository.getAllPostsCheckedLikes(userId);
  //     allPosts.sort((a, b) => {
  //       return b.createdAt - a.createdAt;
  //     });

  //     return allPost;
  //   } catch (err) {
  //     throw err;
  //   }
  // }

  createPost = async ({ title, content }) => {
    try {
      const createdPost = await this.postRepository.createPost({
        title,
        content,
      });

      return createdPost;
    } catch (err) {
      throw err;
    }
  };

  getPostById = async ( {postId} ) => {
    try {
      const createdPost = await this.postRepository.getPostById({postId} );

      return createdPost;
    } catch (err) {
      throw err;
    }
  };

  updatePost = async (postId, title, content) => {
    try{
      await this.postRepository.updatePost(postId, title, content);
      const findPost = await this.postRepository.getPostById(postId);
      // if (!findPost) throw new Error("엥 접근 잘못됨");
      // if (findPost.user !== user) {
      //   return "권한이 없습니다.";
      // }

      return findPost;
    } catch(err) {
      throw err;
    }
  };

  deletePost = async (postId) => {
    try {
      const findPost = await this.postRepository.getPostById(postId);
      // if (!findPost) throw new Error("엥 접근 잘못됨");
      // if (findPost.user !== user) {
      //   return "권한이 없습니다.";
      // }

      await this.postRepository.deletePost(postId);

      return findPost;
    } catch (err) {
      throw err;
    }
    };

  // likePost = async (postId, like, nickname) => {
  //   if (like) {
  //     const createLike = await this.postRepository.createLike(
  //       postId,
  //       user
  //     );
  //     const countLike = await this.postRepository.countLike(postId);
  //     return "게시글의 좋아요를 등록하였습니다.";
  //   } else {
  //     const deleteLike = await this.postRepository.deleteLike(
  //       postId,
  //       user
  //     );
  //     const discountLike = await this.postRepository.discountLike(postId);
  //     return "게시글의 좋아요를 취소하였습니다.";
  //   }
  // };

}

module.exports = PostService;
