const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");

router.get("/dashboard", carController.getDashboard);
router.get("/cars/add", (req, res) => {
    if (!req.session.user) return res.redirect("/login");
    res.render("addCar");
});
router.post("/cars", carController.createCar);
router.get("/cars/edit/:id", carController.getEditCar);
router.post("/cars/update/:id", carController.updateCar);
router.post("/cars/delete/:id", carController.deleteCar);

module.exports = router;
