const express = require('express');
const User = require("../models/user");
const {postRegister} = require("../contollers/userController");
const router = express.Router();


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', postRegister);

module.exports = router;