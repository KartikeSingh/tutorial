const { model, Schema } = require('mongoose');

module.exports = model('user_in_a_guild_data', new Schema({
    id: String, // User ID
    guild: String, // Guild ID
    points: { // The points in this server
        type: Number,
        default: 0
    },
    items: [String], // items this user have in this guild
}))