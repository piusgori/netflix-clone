const bcrypt = require('bcryptjs');

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
    res.status(201).json(newUser);
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) return next(new HttpError('Wrong email', null, 401));
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return next(new HttpError('Wrong password', null, 401));
        return res.status(200).json(user);
    } catch(err) {
        return next(new HttpError(err));
    }
}