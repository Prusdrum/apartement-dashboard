const configureRoutes = (app) => {
    app.get('/', (req, res) => {
        res.render('index');
    });
}

module.exports = configureRoutes;