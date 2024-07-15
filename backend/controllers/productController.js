const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhander");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const ApiFeatures = require("../utils/apifeatures");
// const cloudinary = require("cloudinary");

// Create Product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res) => {
  // let images = [];

  // if (typeof req.body.images === "string") {
  //   images.push(req.body.images);
  // } else {
  //   images = req.body.images;
  // }

  // const imagesLinks = [];

  // for (let i = 0; i < images.length; i++) {
  //   const result = await cloudinary.v2.uploader.upload(images[i], {
  //     folder: "products",
  //   });

  //   imagesLinks.push({
  //     public_id: result.public_id,
  //     url: result.secure_url,
  //   });
  // }

  // req.body.images = imagesLinks;
  // req.body.user = req.user.id;

  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error.message);
  }
});
// Get All Product
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return next(new ErrorHandler("pork product is not found", 404));
    }
    return res.json({
      message: products,
      sucess: true,
    });
  } catch (error) {
    console.log(error);
  }
});

exports.changeProduct = catchAsyncErrors(async (req, res) => {
  const _id = req.params.id;
  const data = req.body;
  const changeData = await Product.findByIdAndUpdate(
    _id,

    data,

    {
      new: true,
    }
  );
  return res.json({
    data: changeData,
  });
});

exports.deleteProduct = catchAsyncErrors(async (req, res) => {
  const { id } = req.params;
  const findProduct = await Product.findById({
    _id: id,
  });
  if (!findProduct) {
    return next(new ErrorHandler("pork product is not found", 404));
  }
  const deletedData = await Product.findByIdAndDelete(id);
  return res.json({
    message: "deleted successfully",
    success: true,
    payload: deletedData,
  });
});

// Get All Product (Admin)

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("pork product is not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});
