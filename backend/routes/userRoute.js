const {
  registerUser,
  loginUser,
  logout,
} = require("../controllers/userController");
const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/registerUser").post(registerUser);
router.route("/login").post(isAuthenticatedUser, loginUser);
router.route("/logout").post(isAuthenticatedUser, logout);

module.exports = router;
