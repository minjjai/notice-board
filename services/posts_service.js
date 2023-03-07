const PostRepository = require("../repositories/posts_repository");

class PostService {
  PostRepository = new PostRepository();
  getAllPosts = async () => {
    try {
      // 저장소(Repository)에게 데이터를 요청합니다.
      const allPost = await this.postRepository.getAllPosts();

      // 호출한 Post들을 가장 최신 게시글 부터 정렬합니다.
      allPost.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });

      // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
      return allPost;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = PostService;
