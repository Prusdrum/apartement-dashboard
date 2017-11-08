const registerItemSchema = (db, Schema) => {
  const inventoryItemSchema = new Schema({
    name: Schema.Types.String,
    tags: [Schema.Types.String]
  });

  return db.model('InventoryItem', inventoryItemSchema);
}

module.exports = registerItemSchema;