const passport = require('passport');

exports.get = (req, res) => {
	res.render('login');
};

exports.post = (req, res, next) => {
	passport.authenticate('local', {
		successRedirect: '/dashboard',
		failureRedirect: '/login',
		failureFlash: true
	})(req, res, next)
};
