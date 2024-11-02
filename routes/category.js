const express = require("express");
const router = express.Router();
var categoryController = require("../src/category/categoryController");

router.route('/category/getall').get(categoryController.getDataControllerfn);
router
  .route('/category/create')
  .post(categoryController.createUserControllerFn);

module.exports = router;
