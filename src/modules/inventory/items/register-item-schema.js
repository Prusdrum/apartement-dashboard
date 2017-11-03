const registerItemSchema = (db, Schema) => {
  const inventoryItemSchema = new Schema({
    name: String,
    tags: [String]
  });

  return db.model('InventoryItem', inventoryItemSchema);
}

module.exports = registerItemSchema;