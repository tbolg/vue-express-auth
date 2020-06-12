const users = require('../database/users');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcrypt');

function jwtSignUser (user) {
    const ONE_WEEK = 60 // * 60 * 24 * 7
        return jwt.sign(user, config.authentication.jwtSecret, {
            expiresIn: ONE_WEEK
        })
}

module.exports = {
    async register(req, res) {
        try {
            const user = req.body;
            users.createUser(user).then(() => {
                res.send({
                    message: "created user"
                }) 
            })
        } catch(err) {
            console.log(err);
        }
    },
    async login(req, res) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            //const authenticated = users.checkPassword(email, password)
            users.getUser(email).then(doc => {
                bcrypt.compare(password, doc.password, function(err, result) {
                    const authenticated = result;
                    if (authenticated) {
                        // Return json token
                        console.log(users.getUser(email));
                        res.status(200).send({
                            token: jwtSignUser(doc),
                            user: doc
                        })
                    } else if (!authenticated) {
                        res.status(403).send({
                            error: "Incorrect login information"
                        })
                    }
                })
            }).catch(err => {
                res.status(403).send({
                    error: "Incorrect login information"
                })
            })
        } catch(err) {
            console.log(err)
            res.status(500).send({
                error: "An error has occurred while trying to log in."
            })
        }
        
    }
}
