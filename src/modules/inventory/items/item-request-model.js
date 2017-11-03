const mapToResponse = (schemaModel) => {
    return {
        id: schemaModel._id,
        name: schemaModel.name,
        tags: schemaModel.tags
    }
}



module.exports = {
    mapToResponse
};