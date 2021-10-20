const { join } = require('path')
const express = require('express');
const app = express();

let users = [{
    name: "shisui",
    age: 16
}];

app.use(express.json())

app.get("/some/path", (req, res) => {
    res.send({
        time: Date.now(),
        message: "Why are you here?",
        invite: "https://discord.gg/d7aV4Sap",
    })
})

app.get("/file", (req, res) => {
    res.sendFile(join(__dirname, "./file"))
})

app.get("/raw", (req, res) => {
    const data = {
        name: "Shisui",
        age: 10,
        mail: "shisui@shisui.com"
    }

    res.contentType("html")
    res.send('{"name":"hi"}');
})

app.use("*", (req, res, next) => {
    if (!req.headers.authorization) return res.status(403).send({
        error: true,
        time: Date.now(),
        message: "NO authorization token was provided",
    })

    if (req.headers.authorization !== "shisui_can_not_code") return res.status(403).send({
        error: true,
        time: Date.now(),
        message: "Invalid authorization token was provided",
    })

    next()
})

app.get("/user/:id", (req, res) => {
    const data = users[parseInt(req.params.id)];

    if (!data) return res.status(404).send({
        error: true,
        time: Date.now(),
        message: "User not found!"
    });

    res.send({
        error: false,
        time: Date.now(),
        message: "User was found",
        data
    })
})

app.post("/user",(req,res) => {
    users.push(req.body);

    res.send({
        error: false,
        time: Date.now(),
        message: "User was added successfully",
        data:req.body
    })
})

app.patch("/user/:id", (req, res) => {
    console.log(req.body);
    const data = users[parseInt(req.params.id)];

    if (!data) return res.status(404).send({
        error: true,
        time: Date.now(),
        message: "User not found!"
    });

    Object.entries(req.body).forEach(v => {
        data[v[0]] = v[1];
    })

    users[parseInt(req.params.id)] = data;

    res.send({
        error: false,
        time: Date.now(),
        message: "User was updated successfully",
        data
    })
})

app.delete("/user/:id", (req, res) => {
    const data = users[parseInt(req.params.id)];

    if (!data) return res.status(404).send({
        error: true,
        time: Date.now(),
        message: "User not found!"
    });

    users = users.filter((v, i) => i === req.params.id);

    res.send({
        error: false,
        time: Date.now(),
        message: "User was deleted successfully",
        data
    })
})

app.listen(3000)