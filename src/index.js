const path = require('path');
const architect = require('architect');

const configPath = path.join(__dirname, 'config.js');
const config = architect.loadConfig(configPath);

architect.createApp(config, function(err, app) {
    if(err) {
        throw err
    }
});