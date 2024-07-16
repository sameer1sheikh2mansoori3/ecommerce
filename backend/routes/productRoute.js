const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
  changeProduct,
} = require("../controllers/productController");

const router = express.Router();

router.route("/product/new").post(createProduct);
router.route("/product").get(getAllProducts);
router.route("/product/:id").put(changeProduct);
router.route("/product/:id").delete(deleteProduct).get(getProductDetails);

module.exports = router;
