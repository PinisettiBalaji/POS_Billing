const express = require("express")
const mongoose = require("mongoose")

const app=express();
const port=7000;

const mongodburl="mongodb://localhost:27017/posdb"
mongoose.connect(mongodburl);
