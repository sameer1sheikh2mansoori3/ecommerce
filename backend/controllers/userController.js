const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
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

exports.loginUser = catchAsyncErrors(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email & Password", 400));
  }
  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorHander("no user found"), 501);
  }

  sendToken(user, 200, res);
  return res;
});
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});
