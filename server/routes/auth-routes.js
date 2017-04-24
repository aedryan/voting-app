(function(){
    
    module.exports = function(app, passport) {

        app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

        // handle the callback after facebook has authenticated the user
        app.get('/auth/facebook/callback', passport.authenticate('facebook', {
            successRedirect : '/mypolls',
            failureRedirect : '/'
        }));

        app.get('/auth/logout', (req, res) => {
            req.logout();
            res.redirect('/');
        });
        
    };

})();