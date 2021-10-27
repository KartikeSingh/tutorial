// EPisode coming soon
const users = require('./models/user');
const configs = require('./models/config');
const mongoose = require('mongoose');
const { config } = require('dotenv');

config();

mongoose.connect(process.env.MONGO).then(async () => {
    // Sorting Users
    const db = await users.find().sort({ age: 1 }).limit(3).lean();

    // console.log(await users.find().sort({age:1}).limit(3).lean());


    // Finding user who includes

    // console.log(await users.find({
    //     name: {
    //         $regex: /n$/i,
    //     }
    // }))

    // Array

    // find array with size x
    // console.log(await configs.find({ data: { $size: 3 } }))

    // find array with some element
    //  console.log(await configs.find({ data: { $all: ["hello", "world", "what"] } }))

    // Push stuff
    // console.log(await configs.findOneAndUpdate({ id: 6 }, { $push: { data: "your name" } }, { new: true }))
    // console.log(await configs.findOneAndUpdate({ id: 6 }, { $push: { data: { $each: ["helo", "kelo", "yellow"] } } }, { new: true }))

    // Pull Stuff
    // console.log(await configs.findOneAndUpdate({ id: 6 }, { $pull: { data: { $in: ["ayo","bro"] } } }, { new: true }))

})