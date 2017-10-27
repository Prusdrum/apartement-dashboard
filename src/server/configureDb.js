const promisify = require('util').promisify;

const MongoClient = require('mongodb').MongoClient;
const connectDb = promisify(MongoClient.connect);

const configureDb = (config) => {
    if (config.USE_DB === 'false') {
        console.log('Using fake DB');

        return new Promise((resolve) => {
            const dbMock = {};

            resolve(dbMock);
        });
        
    } else {
        return connectDb(config.DB_PATH);
    }
}   

module.exports = configureDb;