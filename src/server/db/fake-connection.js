module.exports = (config) => {
    console.log('Using fake DB');
    
    return new Promise((resolve) => {
        const schema = {
            find: () => {
                return Promise.resolve([]);
            }
        }

        //mock model registration
        const model = () => {
            return schema
        }


        const dbMock = {
            model
        };

        resolve(dbMock);
    });
};