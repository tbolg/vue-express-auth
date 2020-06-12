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

function checkPassword(email, password) {
    
    users.findOne({email: email}).then(doc => {
        // Check password hash
        return bcrypt.compare(password, doc.password);
    
    }).catch(err => {
        // User isn't in database
        console.log("user does not exist")
        
    })
    
}

function getAllUsers() {
    return users.find();
}

function clearUsers() {
    return users.remove();
}

module.exports = {
    createUser,
    getAllUsers,
    clearUsers,
    checkPassword,
    getUser,
}