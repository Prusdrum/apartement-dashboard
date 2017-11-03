const HttpStatus = require('http-status-codes');

const createInventoryController = (itemsRepository, mapper) => {

    const getItems = (req, res) => {
        const {tags} = req.query;

        itemsRepository.get(tags)
            .then((items) => {
                res.status(HttpStatus.OK);
                res.json(items.map(mapper.mapToResponse));
            });
    }

    const createItem = (req, res) => {
        const {name, tags} = req.body;

        itemsRepository.create(name, tags)
            .then((item) => {
                res.status(HttpStatus.CREATED);
                res.json(mapper.mapToResponse(item));
            });
    }

    const deleteItem = (req, res) => {
        const {id} = req.params;

        itemsRepository.delete(id)
            .then((item) => {
                res.status(HttpStatus.NO_CONTENT);
                res.json({});
            });
    }

    return {
        getItems,
        createItem,
        deleteItem
    }
}

module.exports = createInventoryController;