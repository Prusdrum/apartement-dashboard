const mongoose = require('mongoose');

module.exports = (config) => {
    return new Promise((resolve, reject) => {
        const db = mongoose.createConnection(config.DB_PATH);
        
        db.on('error', (err) => {
            reject(err);
        });
        
        db.once('open', () => {
          resolve(db);
        });
    });
}