const Movie = require('../models/movie');
const HttpError = require('../models/http-error');

exports.get = async (req, res, next) => {
    const id = req.params.id;
    try {
        const movie = await Movie.findById(id);
        return res.status(200).json(movie);
    } catch (err) {
        return next(new HttpError('Unable to find movie'));
    }
}

exports.getAll = async (req, res, next) => {
    if (!req.user.isAdmin) return next(new HttpError('You are not allowed', null, 403)); 
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies.reverse());
    } catch (err) {
        return next(new HttpError('Unable to find movies'));
    }
}

exports.getRandom = async (req, res, next) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === 'series') {
             movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } }
             ])
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } }
             ])
        }
        return res.status(200).json(movie);
    } catch (err) {
        return next(new HttpError('Unable to get random'));
    }
}

exports.create = async (req, res, next) => {
    if (!req.user.isAdmin) return next(new HttpError('You are not allowed', null, 403));  
    const newMovie = new Movie(req.body);
    try {
        const savedMovie = await newMovie.save();
        return res.status(201).json(savedMovie);
    } catch (err) {
        return next(new HttpError('An error has occured'));
    }
}

exports.update = async (req, res, next) => {
    if (!req.user.isAdmin) return next(new HttpError('You are not allowed', null, 403));
    const id = req.params.id;
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        return res.status(201).json(updatedMovie);
    } catch (err) {
        return next(new HttpError('Unable to update user'));
    }
}

exports.delete = async (req, res, next) => {
    if (!req.user.isAdmin) return next(new HttpError('You are not allowed', null, 403));
    const id = req.params.id;
    try {
        await Movie.findByIdAndDelete(id);
        return res.status(201).json('Deleted Movie');
    } catch (err) {
        return next(new HttpError('Unable to update user'));
    }
}