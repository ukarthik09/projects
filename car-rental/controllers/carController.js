const Car = require("../models/carModel");

exports.getDashboard = async (req, res) => {
    const cars = await Car.find();
    res.render("dashboard", { cars, user: req.session.user });
};

exports.createCar = async (req, res) => {
    if (!req.session.user) return res.redirect("/login");  // Ensure user is logged in

    try {
        const { name, description, price, imageUrl } = req.body;
        await new Car({
            name,
            description,
            price,
            imageUrl,
            userId: req.session.user._id
        }).save();

        res.redirect("/dashboard");  // Redirect to dashboard after adding car
    } catch (err) {
        res.send("Error adding car");
    }
};


exports.getEditCar = async (req, res) => {
    if (!req.session.user) return res.redirect("/login");

    const car = await Car.findById(req.params.id);
    if (!car || car.userId.toString() !== req.session.user._id.toString()) {
        return res.send("Unauthorized access");
    }

    res.render("editCar", { car });
};

exports.updateCar = async (req, res) => {
    if (!req.session.user) return res.redirect("/login");

    const car = await Car.findById(req.params.id);
    if (!car || car.userId.toString() !== req.session.user._id.toString()) {
        return res.send("Unauthorized access");
    }

    await Car.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/dashboard");
};

exports.deleteCar = async (req, res) => {
    if (!req.session.user) return res.redirect("/login");

    const car = await Car.findById(req.params.id);
    if (!car || car.userId.toString() !== req.session.user._id.toString()) {
        return res.send("Unauthorized access");
    }

    await Car.findByIdAndDelete(req.params.id);
    res.redirect("/dashboard");
};
