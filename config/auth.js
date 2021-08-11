module.exports = {
    checkAuthenticated : function(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error', 'Please log in to view this resource');
        res.redirect('/login');
    },
    checkNotAuthenticated: function(req, res, next) {
        if (!req.isAuthenticated()) {
            res.redirect('/dashboard');  
        }
        return next();      
    },
}