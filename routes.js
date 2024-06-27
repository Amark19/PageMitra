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

app.get('/', (req, res) => {
    // check if user is logged in
    // if logged in, show dashboard
    // else show login i.e res.render('login') or res.redirect('/login')
});

app.get('/login', (req, res) => {
    // check if user is logged in
    // if logged in, redirect to dashboard
    // else show login page
});

app.get('/register', (req, res) => {
    // check if user is logged in
    // if logged in, redirect to dashboard
    // else show register page
});

app.post('/register', (req, res) => {
    // save user details to the database
    // redirect to home page
});

app.post("/createTestPage", (req, res) => {
   // receive json data from the client
    // add this data to Page model
    // update page primary key to user model as a foreign key (could be array of pages)
});

app.get("TestPage/:userName/:pageTitle", (req, res) => {
   // check wheter a user has access to this page or not then only render the page
   // if not then return unauthorized
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});