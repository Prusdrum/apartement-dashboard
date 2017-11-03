const itemsRepository = (IntenvoryItem) => {
    return {
        get: (tags = []) => {
            return IntenvoryItem.find({ });
        },
        create: (name, tags) => {
            const item = new IntenvoryItem({
                name, tags
            });

            return item.save();
        },
        delete: (id) => {
            return IntenvoryItem.remove({ _id: id });
        }
    }
};

module.exports = itemsRepository;
