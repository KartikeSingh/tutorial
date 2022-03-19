// EPisode coming soon
const users = require('./models/user');
const configs = require('./models/config');
const mongoose = require('mongoose');
const { config } = require('dotenv');
config();

mongoose.connect(process.env.MONGO).then(async () => {
    // Searching for stuff
    let data;
    console.log("sd")

    // $eq
    data = await users.find({
        name: {
            $eq: "shisui"
        }
    });

    // $ne
    // data = await users.find({ name: { $ne: "shisui" } }).limit(3);

    // $gt
    // ! Error: Please fix this
    // data = await users.find({ age: { $gt: 30 } })

    // $gte
    // data = await users.find({ age: { $gte: 30 } })

    // $lt
    // data = await users.find({ age: { $lt: 30 } })

    // $lte
    // data = await users.find({ age: { $lte: 30 } })

    // $in
    // data = await users.find({ name: { $in: ["shisui", "naruto~kun"] } })

    // $nin
    // data = await users.find({ name: { $nin: ["shisui", "naruto~kun"] } }).limit(3)

    // $exists
    // data = await users.find({ lastName: { $exists: false } }).limit(3)

    // $type, https://docs.mongodb.com/manual/reference/operator/query/type/#available-types
    // data = await users.find({ name: { $type: "string" } })


    // $or
    // data = await users.find({
    //     $or: [
    //         { age: { $lt: 20 } },
    //         { age: { $gt: 45 } },
    //     ]
    // })

    // $nor
    // data = await users.find({
    //     $nor: [
    //         { age: { $lt: 20 } },
    //         { age: { $gt: 45 } },
    //     ]
    // })

    // $and
    // data = await users.find({
    //     $and: [
    //         { age: { $lt: 20 } },
    //         { maxAge: { $gt: 30 } },
    //     ]
    // })

    // $not
    // data = await users.find({ age: { $not: { $lt: 45 } } }).limit(3)

    // Result
    console.log(data)
})