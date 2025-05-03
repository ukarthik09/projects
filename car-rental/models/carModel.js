const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // Car owner
});

module.exports = mongoose.model("Car", carSchema);
