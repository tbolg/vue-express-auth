const monk = require('monk');
const uri = 'localhost/mevnboilerplate';
const db = monk(uri);

module.exports = db;