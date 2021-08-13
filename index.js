const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const route = require('./routes');
const app = express();
const port = 4000;
const URI = 
'mongodb+srv://admin:IXULWGqJfgzGoqOn@cluster0.l5iad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// Passport config
require('./config/passport')(passport);

// Template
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

// Routes
route(app);

// Connect to Database
mongoose.connect(URI, 
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(() => {
        console.log('Connnected to DB');
        app.listen(port, () =>{
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(err => {
        console.log('err', err);
    });