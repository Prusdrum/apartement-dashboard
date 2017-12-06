const createTramsController = require('./trams-controller/trams-controller');

const setupModule = (options, imports, register) => {
    const {webserver} = imports;
    const app = webserver.getApp();

    const controller = createTramsController();

    app.get('/api/trams/:lineNumber/:direction/:stop', controller.getTrams);

    register(null, {});
};

module.exports = setupModule;