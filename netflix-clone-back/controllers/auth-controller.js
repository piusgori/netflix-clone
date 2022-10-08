const User = require('../models/user');

exports.register = async (req, res, next) => {
    const { username, password, email } = req.body;

    const newUser = new User({ username: username, email: email, password: password });

}