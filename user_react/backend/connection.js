const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/userreact").then(() => {
        console.log("connected")
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = connect