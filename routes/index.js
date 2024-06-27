const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // check if user is logged in
    // if logged in, show dashboard
    // else show login
    res.render('login'); // Assuming user is not logged in for simplicity
});

module.exports = router;