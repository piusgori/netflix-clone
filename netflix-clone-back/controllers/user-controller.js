const bcrypt = require('bcryptjs');

const User = require('../models/user');
const HttpError = require('../models/http-error');

exports.update = async (req, res, next) => {
    const userId = req.params.id;
    const { password } = req.body;
    if (req.user.id === userId || req.user.isAdmin) {
        try {
            password = password ? await bcrypt.hash(password, 12) : null;
            const updatedUser = await User.findByIdAndUpdate(userId, { $set: req.body }, { new: true });
            res.status(200).json(updatedUser);
        } catch (err) {
            return next(new HttpError('Unable to process'));
        }
    } else {
        return next(new HttpError('Only update your account', 403));
    }
}

exports.delete = async (req, res, next) => {
    const userId = req.params.id;
    if (req.user.id === userId || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(userId)
            res.status(200).json(updatedUser);
        } catch (err) {
            return next(new HttpError('Unable to process'));
        }
    } else {
        return next(new HttpError('Only update your account', 403));
    }
}