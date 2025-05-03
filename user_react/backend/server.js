const express = require('express');
const connect = require('./connection.js');
const userRouter = require('./route/userRoute.js');
const cors = require("cors");

connect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRouter);

app.listen(2000, () => {
    console.log("Server connected on port 2000");
});
