const users = require('../database/users');
const bcrypt = require('bcrypt');

module.exports = {
    async changePassword(req, res) {
        try {
            const email = req.user.email;
            const oldPassword = req.body.oldPassword;
            const newPassword = req.body.newPassword;
            users.getUser(email).then(doc => {
                bcrypt.compare(oldPassword, doc.password, (err, result) => {
                    const authenticated = result;
                    // Old password given by user matches the hash of the password in the db
                    if (authenticated) {
                        users.updatePassword(req.user._id, newPassword).then(doc => {
                            res.status(200).send({
                                message: "successfully change password"
                            })
                        }).catch(err =>  {
                            res.status(403).send({
                                error: "you are not authorized to access this resource"
                            })
                        })
                    } else if (!authenticated) {
                        res.status(403).send({
                            error: "you are not authorized to access this resource"
                        })
                    }
                    
                })
            }).catch(err => {
                res.status(403).send({
                    error: "you are not authorized to access this resource"
                })
            }) 
        } catch(err) {
            console.log(err);
            res.status(403).send({
                error: "error changing password."
            })
        }
    }
}