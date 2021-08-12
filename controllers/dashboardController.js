const { checkAuthenticated, checkNotAuthenticated } = require('../config/auth.js');

exports.get =  (req, res) => {
	res.render('dashboard');
};