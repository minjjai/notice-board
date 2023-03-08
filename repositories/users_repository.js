const { Users } = require("../models");

class UserRepository {
  register = async (user, hash) => {
    try{
        const check = await Users.findOne({ where: { user } });
        if (check) {
        return "이미 가입된 닉네임이 있습니다.";
        }
        const register = await Users.create({ user, password: hash });

        return register;
    } catch (err) {
        throw err;
    }
  };

  login = async (user) => {
    const login = await Users.findOne({
      where: { user },
    });
    return login;
  };
}
module.exports = UserRepository;
