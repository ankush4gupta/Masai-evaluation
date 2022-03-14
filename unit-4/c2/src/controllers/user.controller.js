const express = require("express");
const User = require("../models/user.model")
const route = express.Router()

route.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.get("/", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = route;