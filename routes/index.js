const home = require('./home');
const login = require('./Login');
const logout = require('./logout');
const register = require('./register');
const dashboard = require('./dashboard');
const { checkAuthenticated, checkNotAuthenticated } = require('../config/auth.js');

function route(app) {
	app.use('/dashboard',checkAuthenticated, dashboard);
	app.use('/logout', logout);
	app.use('/login',  login);
	app.use('/register', register);
	app.use('/', home);
}


module.exports = route;
