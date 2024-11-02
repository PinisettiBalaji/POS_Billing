const express = require("express");
const router = express.Router();
var salesController = require("../src/sales/salesController");

// router.route('/sales/getall').get(saleController.getDataControllerfn);
router.route('/sales/create').post(salesController.createSalesfn);

module.exports = router;
