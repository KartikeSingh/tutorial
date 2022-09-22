const { model, Schema } = require('mongoose');

module.exports = model('user_global_data', new Schema({
    id: String, // User ID
    points: { // The points of the user
        type: Number,
        default: 0
    }
}))