const jwt = require("jsonwebtoken");
const { Users } = require("../models");

//접근권한과 유저의 정보를 가져오는 미들웨어
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const [authType, authToken] = (authorization || "").split(" "); 
  if (!authToken || authType !== "Bearer") {
    //타입 확인은 베어러가 아닐때 내보내는 게 간단함
    res.status(401).send({
      errorMessage: "로그인 후 이용 가능한 기능입니다.",
    });
    return;
  }

  try {
    const { userId } = jwt.verify(authToken, "my-secret-key");
    Users.findByPk(userId).then((user) => {
      res.locals.user = user;
      next();
    });
  } catch (err) {
    res.send({
      errorMessage: "로그인 후 이용 가능한 기능입니당.",
    });
  }
};
