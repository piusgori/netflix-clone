const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.register = async (req, res, next) => {
    const { username, password, email } = req.body;
    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 12);
     } catch(err) {
        return res.status(500).json(err);
    }
    const newUser = new User({ username: username, email: email, password: hashedPassword });
    try {
        await newUser.save();
    } catch (err) {
        return res.status(500).json(err);
    }
    res.status(201).json(newUser);
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) return res.status(401).json('Wrong email');
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(401).json("Wrong password");
        const { userPassword, ...info } = user;
        return res.status(200).json(info._doc);
    } catch(err) {
        console.log(err);
    }
}