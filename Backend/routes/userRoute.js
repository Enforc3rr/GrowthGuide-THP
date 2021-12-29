const express = require("express");
const router = express.Router();
const {userSignUp,userLogin} = require("../controller/userController");

router.route("/login")
    .post(userLogin);

router.route("/signup")
    .post(userSignUp);

module.exports = router;