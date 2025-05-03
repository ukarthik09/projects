const express = require('express');
const { signup, login } = require('../controller/authController');
const { addUser, updateUser, deleteUser, showUsers, fetchSingleUser } = require('../controller/userController');

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/add", addUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.get("/show", showUsers);
router.get("/fetchone/:id", fetchSingleUser);

module.exports = router;
