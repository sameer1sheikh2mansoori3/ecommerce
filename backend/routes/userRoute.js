const { registerUser } = require("../controllers/userController");
const express = require("express");
const router = express.Router();

router.route("/registerUser").post(registerUser);

module.exports = router;
