const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: String,
    hobbies: [String],
    data: {
        age: {
            type: Number,
            default: 16
        },
        male: Boolean
    }
});