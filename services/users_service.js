const UserRepository = require("../repositories/users_repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserService {
  userRepository = new UserRepository();

  register = async (user, password) => {
    const bcrypt = require("bcrypt");

    const hash = await bcrypt.hash(password, 10); //sort

    const registerUser = await this.userRepository.register(user, hash);
    return registerUser;
  };

  login = async (user, password) => {
    const existUser = await this.userRepository.login(user);
    const result = await bcrypt.compare(password, existUser.password);
    // 유저정보가 있는지, 패스워드가 맞는지 판단후 로그인
    if (!result || !existUser) {
      return "닉네임 또는 패스워드가 잘못됐습니다.";
    }
    const login = jwt.sign({ userId: existUser.userId }, "my-secret-key"); //토큰 발급
    return login;
  };
}
module.exports = UserService;
