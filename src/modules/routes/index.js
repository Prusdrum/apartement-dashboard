const setupModule = (options, imports, register) => {
    const {webserver} = imports;
    const app = webserver.getApp();

    app.get('/', (req, res) => {
        res.render('index');
    });

    register(null, {});
}

module.exports = setupModule;