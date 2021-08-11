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

exports.logout = (req, res) => {
	req.logout();
	req.flash('success_msg', 'You are logged out');
	res.redirect('/');
};