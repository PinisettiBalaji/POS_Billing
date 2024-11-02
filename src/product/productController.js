const express = require("express");
const router = express.Router();
var productModel = require("../../models/productModel");

var getDataControllerfn = async (req, res) => {
    try {
        const product = await productModel.find({})
            .populate('category', 'categoryName status')
            .populate('brand', 'brandName status')
        res.json(product);
    } catch (error) {
        res.status(400).send(error);
    }
};

var createUserControllerFn = async (req, res) => {
    try {
        const product = new productModel(req.body);
        await product.validate();
        await product.save();
        res.status(201).send({
            status: true,
            message: "Category Created!",
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = { getDataControllerfn, createUserControllerFn };
