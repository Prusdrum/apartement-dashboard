const itemsRepository = (IntenvoryItem) => {
    return {
        get: () => {
            return IntenvoryItem.find({});
        },
        create: (name, tags) => {
            const item = new IntenvoryItem({
                name, tags
            });

            return item.save();
        }
    }
};

module.exports = itemsRepository;
