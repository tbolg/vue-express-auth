const db = require('./connection');
const users = db.get('users');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const ObjectId = require('mongodb').ObjectID;

function getUser(email) {
    return users.findOne({email: email})
}

function createUser(user) {
    try {
        user.created = new Date(); // Date of user being created
        // Hash password
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
        return users.insert(user);
    } catch(err) {
        return err;
    }
   
}

function getAllUsers() {
    return users.find();
}

function clearUsers() {
    return users.remove();
}

function getUserById(id) {
    return users.findOne({_id: id}, '-password');
}

function updatePassword(id, newPassword) {
    try {
        const salt = bcrypt.genSaltSync(saltRounds);
        const newHash = bcrypt.hashSync(newPassword, salt);
        return users.update({_id: id}, {$set: { password: newHash }});
    } catch(err) {
        console.log(err)
        return err;
    }
}

module.exports = {
    createUser,
    getAllUsers,
    clearUsers,
    getUser,
    getUserById,
    updatePassword
}