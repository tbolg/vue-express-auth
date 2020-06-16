const passport = require('passport');

module.exports = (req, res, next) => {
    passport.authenticate('jwt', (err, user) => {
        if (err || !user) {
            res.status(403).send({
                error: 'You are not authorised to access this resource.'
            })
        } else {
            req.user = user;
            next();
        }
    })(req, res, next)
}