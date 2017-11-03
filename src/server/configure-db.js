const promisify = require('util').promisify;
const mongooseConnection = require('./db/mongoose-connection');
const fakeConnection = require('./db/fake-connection');

const configureDb = (config) => {
    return config.USE_DB === 'false' ? fakeConnection(config) : mongooseConnection(config)
}   

module.exports = configureDb;