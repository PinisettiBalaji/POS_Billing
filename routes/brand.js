const express = require("express");
const router = express.Router();
var brandController = require("../src/brand/brandController");

router.route('/brand/getall').get(brandController.getDataControllerfn);
router
    .route('/brand/create')
    .post(brandController.createUserControllerFn);

module.exports = router;
