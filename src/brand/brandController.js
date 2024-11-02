const express = require("express");
const router = express.Router();
var brandModel = require("../../models/brandModel");

var getDataControllerfn = async (req, res) => {
  try {
    const brand = await brandModel.find({});
    res.send(brand);
  } catch (error) {
    res.status(400).send(error);
  }
};

var createUserControllerFn = async (req, res) => {
  try {
    const brand = new brandModel(req.body);
    await brand.validate();
    await brand.save();
    res.status(201).send({
      status: true,
      message: "Brand Created!",
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { getDataControllerfn, createUserControllerFn };
