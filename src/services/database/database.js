const mongoose = require('mongoose');
const fakeConnection = require('./fake-connection');

const setupService = (options, imports, register) => {
    const {PATH, USE_REAL_DB} = options;
    const db = mongoose.createConnection(PATH);

    if (USE_REAL_DB) {
        db.on('error', (err) => {
            throw new Error("Couldn't connect to database");
        });
        
        db.once('open', () => {
            console.log("Database is running..");
    
            register(null, {
                database: {
                    get: () => db
                }
            });
        });
    } else {
        const db = fakeConnection().then(db => {
            register(null, {
                database: {
                    get: () => db
                }
            });
        });
    }
};

module.exports = setupService;