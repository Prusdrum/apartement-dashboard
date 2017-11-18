const createItemsRepository = require('./items/inventory-items-repository');
const registerItemSchema = require('./items/register-item-schema');
const requestMapper = require('./items/item-request-model');
const Schema = require('mongoose').Schema;

const createInventoryController = require('./inventory-controller/inventory-controller');

const setupModule = (options, imports, register) => {
    const {webserver, database} = imports;
    const db = database.get();
    const app = webserver.getApp();

    console.log('register inventory api');

    registerItemSchema(db, Schema);
    const itemsRepository = createItemsRepository(db);
    const controller = createInventoryController(itemsRepository, requestMapper);
    
    app.get('/api/items', controller.getItems);
    app.post('/api/items', controller.createItem);
    app.delete('/api/items/:id', controller.deleteItem);

    register(null, {});
};

module.exports = setupModule;