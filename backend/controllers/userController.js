const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
exports.registerUser = catchAsyncErrors(async (req, res) => {
  const { name, email, password } = req.body;

  const createdUser = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "idddd",
      url: "www.pogo.com",
    },
  });
  return res.json({
    message: "User created successfully",
    payload: createdUser,
    success: true,
  });
});
