const promisify = require('util').promisify;

const MongoClient = require('mongodb').MongoClient;
const connectDb = promisify(MongoClient.connect);

const configureDb = (DB_PATH) => {
    return connectDb(DB_PATH);
}   

module.exports = configureDb;