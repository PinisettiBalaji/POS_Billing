const express = require("express");
const router = express.Router();
var categoryModel = require("../../models/categoryModel");

var getDataControllerfn = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.send(category);
  } catch (error) {
    res.status(400).send(error);
  }
};

var createUserControllerFn = async (req, res) => {
  try {
    const category = new categoryModel(req.body);
    await category.validate();
    await category.save();
    res.status(201).send({
      status: true,
      message: "Category Created!",
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { getDataControllerfn, createUserControllerFn };
