const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//routes
var categoryroutes = require("./routes/category");
var brandroutes = require("./routes/brand");
var productroutes = require("./routes/product");
var salesroutes = require("./routes/sales");


const app = express();
const port = 7000;
const mongodburl = "mongodb://0.0.0.0:27017/posdb";
// const mongodburl ="mongodb+srv://pinisettibalaji8:Balaji%40Preethi143@cluster0.rhzmx.mongodb.net/";
mongoose.connect(mongodburl);

const connection = mongoose.connection;
app.listen(port, () => {
  console.log("Server is Running at port ", port);
});

connection.once("open", () => {
  console.log("Mongodb connected!!!");
});

app.use(bodyParser.json());
app.use(categoryroutes);
app.use(brandroutes);
app.use(productroutes);
app.use(salesroutes);
