const express = require('express');
const connect = require('./connection.js');
const router = require('./route/route.js');
const cors = require("cors");

connect();

const app =express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/product",router);

app.listen(2000,()=>{
    console.log("connected to server")
})