const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs'); // Set the view engine to ejs

app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies

// Import routes
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user');
const pageRoutes = require('./routes/page');

// Use routes
app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/page', pageRoutes);
app.listen(3000, () => {
    console.log('App listening on port 3000');
});