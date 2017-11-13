const itemsRepository = (db) => {
    const InventoryItem = db.model('InventoryItem');

    return {
        get: (tags) => {
            const query = {};

            if (tags && tags.length > 0) {
                query.tags = {
                    $in: tags
                };
            }
            
            return InventoryItem.find(query);
        },
        create: (name, tags) => {
            const item = new InventoryItem({
                name, tags
            });

            return item.save();
        },
        delete: (id) => InventoryItem.remove({ _id: id })
    }
};

module.exports = itemsRepository;
