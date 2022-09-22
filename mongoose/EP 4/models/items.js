const { model, Schema } = require('mongoose');

module.exports = model('user_item_globalx', new Schema({
    id: String, // ID of the item
    user: String, // User ID
    name: String, // Item name
    image: String, // Item image
}))