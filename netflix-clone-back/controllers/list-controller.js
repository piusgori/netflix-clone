const List = require('../models/list');
const HttpError = require('../models/http-error');

exports.get = async (req, res, next) => {
    const { type, genre } = req.query;
    let list = [];
    try {
        if(type) {
            if (genre) {
                list = await List.aggregate([{ $sample: { size: 10 } }, { $match: { type: type, genre: genre } }]);
            } else {
                list = await List.aggregate([{ $sample: { size: 10 } } , { $match: { type: type } }])
            }
        } else {
            list = await List.aggregate([{ $sample: { size: 10 } }])
        }
        return res.status(200).json(list);
    } catch (err) {
        return next(new HttpError('Unable to get list'));
    }
}

exports.create = async (req, res, next) => {
    if (!req.user.isAdmin) return next(new HttpError('You are not allowed', null, 403));
    const newList = new List(req.body);
    try {
        const savedList = await newList.save();
        return res.status(201).json(savedList);
    } catch (err) {
        return next(new HttpError('An error has occured'));
    }
}

exports.delete = async (req, res, next) => {
    if (!req.user.isAdmin) return next(new HttpError('You are not allowed', null, 403));
    const { id } = req.params;
    try {
        await List.findByIdAndDelete(id);
        return res.status(200).json('The list has been deleted'); 
    } catch (err) {
        return next(new HttpError('Unable to delete'));
    }
}