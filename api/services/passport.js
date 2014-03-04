var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcrypt');

function findById (id, fn) {
    User.findOne(id).done(function (err, user) {
        if (err) {
            return fn(null, null);
        } else {
            return fn(null, user);
        }
    });
}

function findByUsername (u, fn) {
    User.findOne({
        userName: u
    }).done(function (err, user){
        if (err) {
            return fn(null, null);
        } else {
            return fn(null, user);
        }
    });
}

passport.serializeUser (function (user, done) {
    done(null, user.id);
});

passport.deserializeUser (function (id, done) {
    findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy(
    function (userName, password, done) {
        process.nextTick(function () {
            findByUsername(userName, function (err, user) {
                if (err)
                    return done(null, err);
                if (!user) {
                    return done(null, false, {
                        message: 'Unknown user' + userName + '!'
                    });
                }
                bcrypt.compare(password, user.password, function (err, res) {
                    if (!res)
                        return done(null, false, {
                            message: 'Invalid password!'
                        });
                    var returnUser = {
                        userName: user.userName,
                        createdAt: user.createdAt,
                        id: user.id
                    };
                    return done(null, returnUser, {
                        message: 'Logged in Successfully!'
                    });
                });
            })
        });
    }
));