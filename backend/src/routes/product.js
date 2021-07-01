const { Router } = require("express");
const router = Router();

const {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  changeStatusProduct,
} = require("../controller/product.controller");

//possibles routes
router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);
router.route("/changeStatus/:id").put(changeStatusProduct);

module.exports = router;
