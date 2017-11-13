const inventoryData = require('./fake-data/inventory.json');

module.exports = (config) => {
    console.log('Using fake DB');
    
    return new Promise((resolve) => {
        const inventoryItem = {
            find: () => {
                return Promise.resolve(inventoryData);
            }
        }

        //mock model registration
        const model = (modelName) => {
            switch (modelName) {
                case 'InventoryItem':
                    return inventoryItem;
            };
        }


        const dbMock = {
            model
        };

        resolve(dbMock);
    });
};