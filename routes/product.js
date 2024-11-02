const express = require("express");
const router = express.Router();
var productController = require("../src/product/productController");

router.route('/product/getall').get(productController.getDataControllerfn);
router
  .route('/product/create')
  .post(productController.createUserControllerFn);

module.exports = router;
