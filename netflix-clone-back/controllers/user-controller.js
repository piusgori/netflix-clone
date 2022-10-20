const bcrypt = require('bcryptjs');

const User = require('../models/user');
const HttpError = require('../models/http-error');
const months = require('../middleware/months');

exports.getUser = async (req, res, next) => {
    const userId = req.params.id;
    try {
        const foundUser = await User.findById(userId);
        return res.status(200).json(foundUser);
    } catch (err) {
        return next(new HttpError('Error occured'));
    }
}

exports.getAll = async (req, res, next) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(10) : await User.find();
        return res.status(200).json(users);
    } catch (err) {
        return next(new HttpError('Unable to get users'));
    }
}

exports.stats = async (req, res, next) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);
    try {
        const data = await User.aggregate([ { $project: { month: { $month: '$createdAt' } } }, { $group: { _id: "$month", total: { $sum: 1 } } } ]);
        return res.status(200).json(data);
    } catch (err) {
        return next(new HttpError('A server side error'));
    }
}

exports.update = async (req, res, next) => {
    const userId = req.params.id;
    const { password } = req.body;
    if (req.user.id === userId || req.user.isAdmin) {
        try {
            password = password ? await bcrypt.hash(password, 12) : null;
            const updatedUser = await User.findByIdAndUpdate(userId, { $set: req.body }, { new: true });
            return res.status(200).json(updatedUser);
        } catch (err) {
            return next(new HttpError('Unable to process'));
        };
    } else {
        return next(new HttpError('Only update your account', null, 403));
    }
}

exports.delete = async (req, res, next) =>  {
    const userId = req.params.id;
    if (req.user.id === userId || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(userId)
            return res.status(200).json('User has been deleted');
        } catch (err) {
            return next(new HttpError('Unable to process'));
        }
    } else {
        return next(new HttpError('Only update your account', null, 403));
    }
}