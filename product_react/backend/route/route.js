const express = require('express');
const { add, update, deleteProduct, show, fetchSingle } = require('../controller/controller.js');
const { signup, login } = require('../controller/authController');

const router = express.Router();

router.get("/getProduct", show);
router.post("/add", add);
router.post("/signup", signup);
router.post("/login", login);
router.put("/update", update);
router.delete("/delete/:id", deleteProduct);

router.get("/fetchone/:id", fetchSingle)

module.exports = router
