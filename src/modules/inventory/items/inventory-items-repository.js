const itemsRepository = (IntenvoryItem) => {
    return {
        get: (tags) => {
            const query = {};

            if (tags && tags.length > 0) {
                query.tags = {
                    $in: tags
                };
            }
            
            return IntenvoryItem.find(query);
        },
        create: (name, tags) => {
            const item = new IntenvoryItem({
                name, tags
            });

            return item.save();
        },
        delete: (id) => IntenvoryItem.remove({ _id: id })
    }
};

module.exports = itemsRepository;
