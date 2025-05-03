const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.redirect("/login");
    } catch (err) {
        res.send("Error registering user");
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.send("Invalid credentials");
        }

        req.session.user = user;
        res.redirect("/dashboard");
    } catch (err) {
        res.send("Error logging in");
    }
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
};
