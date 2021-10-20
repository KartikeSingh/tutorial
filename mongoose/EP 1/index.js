const mongoose = require('mongoose');
const { config } = require('dotenv');

config();

mongoose.connect(process.env.MONGO).then(async v => {
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

    const users = mongoose.model("abc", userSchema);

    const me = await users.findOneAndDelete({
        id: "1",
    });

    console.log(me)
})

const config = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    basic: {
        prefix: {
            type: String,
            default: "!"
        },
        autoReply: [{
            trigger: String,
            reply: String
        }]
    }
})