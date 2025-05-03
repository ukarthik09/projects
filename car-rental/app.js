const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const authRoutes = require("./routes/authRoutes");
const carRoutes = require("./routes/carRoutes");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));



app.use(session({ secret: "secretKey", resave: false, saveUninitialized: true }));

app.use(authRoutes);
app.use(carRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/carRental")
    .then(() => app.listen(3000, () => console.log("Server running on port 3000")))
    .catch(err => console.log(err));
