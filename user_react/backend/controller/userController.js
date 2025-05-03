const User = require('../model/userModel.js');
const bcrypt = require('bcrypt');


const addUser = async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hash });
    await user.save();
    res.json({ message: 'User added successfully' });
};

const updateUser = async (req, res) => {
    const { id, username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const result = await User.findByIdAndUpdate({ _id: id }, { username, password: hash });
    res.json({
        message: "User updated",
        data: result
    });
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const result = await User.findByIdAndDelete({ _id: id });
    res.json({
        message: "User deleted",
        data: result
    });
};

const showUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch users' });
    }
};

const fetchSingleUser = async (req, res) => {
    const { id } = req.params;
    const result = await User.findById(id);
    res.json(result);
};

module.exports = { addUser, updateUser, deleteUser, showUsers, fetchSingleUser };
