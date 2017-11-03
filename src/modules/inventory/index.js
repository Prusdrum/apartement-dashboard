const createItemsRepository = require('./items/inventory-items-repository');
const registerItemSchema = require('./items/register-item-schema');
const requestMapper = require('./items/item-request-model');
const Schema = require('mongoose').Schema;

const createInventoryController = require('./inventory-controller');

const configureRoute = (app, db) => {
    const itemSchema = registerItemSchema(db, Schema);
    const itemsRepository = createItemsRepository(itemSchema);
    const controller = createInventoryController(itemsRepository, requestMapper);
    
    app.get('/items', controller.getItems);
    app.post('/items', controller.createItem);
    app.delete('/items/:id', controller.deleteItem);
}

module.exports = configureRoute;