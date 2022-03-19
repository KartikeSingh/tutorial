const { model, Schema } = require("mongoose");

const configSchema = new Schema({
    id: String,
    features: [String],
});

module.exports = model("another_schema", configSchema);