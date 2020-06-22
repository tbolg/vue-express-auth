const passport = require('passport');
const users = require('./database/users');

const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const config = require('./config/config');
var opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.authentication.jwtSecret;
passport.use(
    new JWTStrategy(opts, async (jwtPayload, done) => {
        console.log(jwtPayload._id)
        try {
            const user = await users.getUserById(jwtPayload._id).then(userJson => {
                if (!userJson) {
                    return done(new Error(), false);
                }
                return done(null, userJson);
            })
        } catch(err) {
            console.log(err)
            return done(new Error(), false);
        }
    })
)