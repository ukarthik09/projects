import bcrypt from 'bcryptjs';
import User from '../models/User.js';

// Signup controller
export const signup = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    try {
        await newUser.save();
        req.session.user = { id: newUser._id, username: newUser.username };
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error signing up', error });
    }
};

// Login controller
// Login Controller
export const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // ✅ Store user info in session
    req.session.user = {
        id: user._id,
        username: user.username
    };

    res.status(200).json({ message: 'Login successful', user: req.session.user });
};



// Logout controller
export const logout = (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.status(200).send('Logged out');
    });
};
