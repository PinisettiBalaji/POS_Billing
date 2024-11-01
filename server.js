const express = require("express")
const mongoose = require("mongoose")

const app=express();
const port=7000;

const mongodburl="mongodb+srv://pinisettibalaji8:Balaji%40Preethi143@poscluster.rhzmx.mongodb.net/"
mongoose.connect(mongodburl);

const connection= mongoose.connection
app.listen(port,()=>{
    console.log("Server is Running at port ", port)
});

connection.once("open",()=>{
    console.log("Mongodb connected!!!");
})