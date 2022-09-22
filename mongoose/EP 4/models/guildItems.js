const { model, Schema } = require('mongoose');

module.exports = model('user_item_guild', new Schema({
    id: String, // ID of the item
    name: String, // Item name
    image: String, // Item image
}))