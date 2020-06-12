const monk = require('monk');
const connectionURL = 'localhost/mevnboilerplate';
const db = monk(connectionURL);

module.exports = db;