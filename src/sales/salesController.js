const express = require("express");
const router = express.Router();

var salesModel = require("../../models/salesModel");
var salesDetailModel = require("../../models/salesDetailsModel");


var createSalesControllerFn = async (req, res) => {
    try {
        const { subTotal, items } = req.body;
        const sales = new salesModel({ subTotal });

        const savedSales = await sales.save();

        const salesDetails = new salesDetailModel({
            salesId: savedSales._id,
            items: items.map(item => ({
                productName: item.productName,
                price: item.price,
                quantity: item.quantity,
                total: item.quantity * item.price
            }))
        });

        const savedSalesDetails = await salesDetails.save();

        res.status(201).send({
            status: true,
            message: "Sales created successfully!",
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = { createSalesControllerFn };
