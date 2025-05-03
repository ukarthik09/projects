const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    price:Number
})

const productModel = mongoose.model("products",productSchema);

module.exports = productModel;