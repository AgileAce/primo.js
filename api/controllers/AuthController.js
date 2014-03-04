/**
 * AuthController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var passport = require('passport');
module.exports = {
    login: function (req, res) {
        res.view();
    },
	process: function(req, res) {
        passport.authenticate('local', function(err, user, info){
            if ((err) || (!user)) res.send(err);
            req.logIn(user, function(err){
                if (err) res.send(err);
                return res.send({message: 'logged in successfully!'});
            });
        })(req, res);
    },
    logout: function(req, res) {
        req.logout();
        res.send('logged out successfully!');
    }
};

module.exports.blueprints = {
    actions: true,
    rest: true,
    shortcuts: true
};
