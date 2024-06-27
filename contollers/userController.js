const UserController = require('../models/user');

// Middleware for authentication check
function isAuthenticated(req, res, next) {
    // Check if user is logged in
    // if logged in, proceed to next middleware/route handler
    // else, redirect to login page
    next();
}

exports.getLogin = (req, res) => {
    res.render('login');
};

exports.getRegister = (req, res) => {
    res.render('register');
};

exports.postRegister = async (req, res) => {
    const {username, userId} = req.body;
    const user = new UserController(username, userId);
    await user.save();
    res.redirect('/');
};