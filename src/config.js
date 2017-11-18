const config = require('config');
const _ = require('lodash');
const aConfig = [];

_.each(config, function(val, key) {
    aConfig.push(_.extend({
        packagePath: './' + key
    }, val));
});

module.exports = aConfig;