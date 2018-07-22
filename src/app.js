const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Connecting to Database
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log("Db connected"))
    .catch(err => console.log(err));

// Importing Routes
const indexRoutes  = require('./routes/index');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', indexRoutes);

// Start Server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});