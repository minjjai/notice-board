
const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users_controller");
const usersController = new UsersController();

router.post("/signup", usersController.register);
router.post("/login", usersController.login);

module.exports = router;