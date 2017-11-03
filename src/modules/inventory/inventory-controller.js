const HttpStatus = require('http-status-codes');

const createInventoryController = (itemsRepository) => {

    const getItems = (req, res) => {
        itemsRepository.get()
            .then((items) => {
                res.status(HttpStatus.OK);
                res.json(items);
            });
    }

    const createItem = (req, res) => {
        const {name, tags} = req.body;

        itemsRepository.create(name, tags)
            .then((item) => {
                res.status(HttpStatus.CREATED);
                res.json(item);
            });
    }

    return {
        getItems,
        createItem
    }
}

module.exports = createInventoryController;