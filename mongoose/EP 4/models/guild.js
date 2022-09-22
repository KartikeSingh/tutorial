const { model, Schema } = require('mongoose');

module.exports = model('guild_data', new Schema({
    id: String, // Guild ID
    logs: String, // The channel to show logs in
    bonus: { // The bonus in this server
        type: Number,
        default: 0
    },
}))