exports.get =  (req, res) => {
	res.render('dashboard', {
		name: req.user.name
	});
};