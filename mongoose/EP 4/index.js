require('dotenv').config();

const mongoose = require('mongoose');
const guild = require("./models/guild");
const guildItems = require("./models/guildItems");
const items = require("./models/items");
const userGlobal = require("./models/userGlobal");
const userGuild = require("./models/userGuild");

mongoose.connect(process.env.MONGO).then(async () => {
    // Message event
    const message = {
        guild: {
            id: "1234"
        },
        author: {
            id: "2344"
        }
    }

    async function showData() {
        const guildData = await guild.findOne({ id: message.guild.id }) || await guild.create({ id: message.guild.id });

        const userData = await userGlobal.findOne({ id: message.author.id }) || await userGlobal.create({ id: message.author.id });

        const userGuildData = await userGuild.findOne({ id: message.author.id, guild: message.guild.id }) || await userGuild.create({ id: message.author.id, guild: message.guild.id });

        console.log(guildData, userData, userGuildData);
    }

    async function createGlobalItem(id, name, user) {
        const item = await items.create({ id, name, user: user.id, image: "a image url" });

        console.log(item);
    }

    async function createGuildItem(id, name) {
        const item = await guildItems.create({ id, name, image: "a image url" });

const nd =         await userGuild.findOneAndUpdate({ id: message.author.id, guild: message.guild.id }, { $push: { items: item.id } }, {new:true});

        console.log(item, nd);
    }

    async function showUserItem(message) {
        console.log(await items.find({ user: message.author.id }));
    }

    await createGuildItem("A", "Item 1", message.author);
    await createGuildItem("B", "Item 2", message.author);
    
});