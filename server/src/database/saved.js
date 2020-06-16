const db = require('./connection');
const saved = db.get('saved');

function saveText(text) {
    text.created = new Date();
    return saved.insert(text)
}

function getAllText(email) {
    return saved.find({email: email});
}

function clearAllText(email) {
    return saved.remove({email: email});
}

function deleteById(id) {
    return saved.remove({_id: id});
}


module.exports = {
    saveText,
    getAllText,
    clearAllText,
    deleteById
}