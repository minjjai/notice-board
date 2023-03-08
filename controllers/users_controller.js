const UserService = require("../services/users_service");
const Joi = require("joi");

postUsersSchema = Joi.object({ //joi를 활용하여 
  user: Joi.string()
    .min(3)
    .pattern(new RegExp(/^[a-z|A-Z|0-9]+$/))
    .required(),
  password: Joi.string().min(4).disallow(Joi.ref("user")).required(),
  confirm: Joi.ref("password"),
});

class UsersController {
  userService = new UserService();

  register = async (req, res, next) => {
    console.log(req.body);
    if (req.headers.authorization) {
      res.json({ error: "이미 로그인이 되어있습니다." });
      return;
    }

    try {
      const { user, password, confirm } =
      //유효성 검사
        await postUsersSchema.validateAsync(req.body);

      if (password !== confirm) {
        res.status(400).send({
          errorMessage: "패스워드가 패스워드 확인란과 동일하지 않습니다.",
        });
        return;
      }
      //디비등록
      const register = await this.userService.register(
        user,
        password
      );
      console.log(register);
      res.json({ data: register });
    } catch (err) {
        console.log(err);
      return res.json({ errorMessage: err });
    }
  };

  login = async (req, res, next) => {
    try {
      const { user, password } = req.body;
      const login = await this.userService.login(user, password);
      res.json({ data: login });
    } catch (err) {
        console.log(err);
      return res.json({ errorMessage: "요청한 데이터 형식이 올바르지 않습니다." });
    }
  };
}

module.exports = UsersController;