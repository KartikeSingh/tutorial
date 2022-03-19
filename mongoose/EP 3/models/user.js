const { model, Schema } = require("mongoose");

const userSchema = new Schema({
    name: String,
    lastName: String,
    age: Number,
    maxAge: Number,
});

module.exports = model("user_schema_for_youtube", userSchema);