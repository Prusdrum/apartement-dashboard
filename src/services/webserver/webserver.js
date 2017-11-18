const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressReactViews = require('express-react-views');

const app = express();

const setupService = (options, imports, register) => {
    const {VIEWS, STATIC} = options;
    console.log(VIEWS);
    console.log(STATIC);


    app.set('views', VIEWS);
    app.set('view engine', 'jsx');
    app.use('/assets', express.static(STATIC));
    app.engine('jsx', expressReactViews.createEngine());

    app.use(bodyParser.json());

    app.listen(options.PORT, (err) => {
        if (err) {
            throw new Error('Sever is not started');
        }

        console.log(`server is running on port: ${options.PORT}`);

        register(null, {
            webserver: {
                getApp: () => app
            }
        })
    });
}

module.exports = setupService;