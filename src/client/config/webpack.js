const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: {
        dashboard: path.join(__dirname, '..', 'apps', 'dashboard', 'index.js')
    },
    output: {
        path: path.join(__dirname, '..', 'public'),
        filename: "[name].js",
        chunkFilename: "[id].chunk.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'env'],
                        plugins: ['transform-object-rest-spread']
                    }
                }
            }
        ]
    }
}