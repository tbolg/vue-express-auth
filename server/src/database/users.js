const db = require('./connection');
const users = db.get('users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function getUser(email) {
    return users.findOne({email: email})
}

function createUser(user) {
    try {
        user.created = new Date(); // Date of user being created
        // Hash password
        var plainTextPassword = users.password;
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
    return users.find({_id: id});
}

module.exports = {
    createUser,
    getAllUsers,
    clearUsers,
    getUser,
    getUserById
}