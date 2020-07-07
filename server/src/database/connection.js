const monk = require('monk');
const uri = process.env.MONGODB_URI ||'localhost/mevnboilerplate';
const db = monk(uri);

module.exports = db;