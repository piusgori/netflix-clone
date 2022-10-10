const jwt = require('jsonwebtoken');
const HttpError = require('../models/http-error');

const verify = (req, res, next) => {
    const authHeader = req.headers.token.split(' ')[1];
    if (authHeader) {
        jwt.verify(authHeader, 'netflix', (err, user) => {
            if (err) return next(new HttpError('Token is invalid', null, 403));
            req.user = user;
            next();
        })
    } else {
        return next(new HttpError('You are not authenticated', null, 401));
    }
} 

module.exports = verify;