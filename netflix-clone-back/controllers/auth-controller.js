const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');
const User = require('../models/user');

exports.register = async (req, res, next) => {
    const { username, password, email } = req.body;
    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 12);
     } catch(err) {
        return next(new HttpError(err));
    }
    const newUser = new User({ username: username, email: email, password: hashedPassword });
    try {
        await newUser.save();
    } catch (err) {
        return next(new HttpError(err));
    }
    const createdUser = { username, email, isAdmin: newUser.isAdmin, profilePic: newUser.profilePic, id: newUser._id, createdAt: newUser.createdAt, updatedAt: newUser.updatedAt };
    res.status(201).json(createdUser);
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) return next(new HttpError('Wrong email', null, 401));
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return next(new HttpError('Wrong password', null, 401));
        const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, 'netflix', { expiresIn: "5d" });
        const loggedUser = { username: user.username, email, isAdmin: user.isAdmin, profilePic: user.profilePic, id: user._id, createdAt: user.createdAt, updatedAt: user.updatedAt, token: accessToken };
        return res.status(200).json(loggedUser);
    } catch(err) {
        return next(new HttpError(err));
    }
}