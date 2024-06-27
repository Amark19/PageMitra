const express = require('express');
const {createTestPage, getTestPage} = require("../contollers/pageController");
const router = express.Router();

router.post('/createTestPage', createTestPage);

router.get('/TestPage/:userName/:pageTitle', getTestPage);

module.exports = router;