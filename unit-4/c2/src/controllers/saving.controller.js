const express = require("express");
const Saving = require("../models/saving.model")
const route = express.Router()

route.post("", async (req, res) => {
    try {
        const saving = await Saving.create(req.body);
        res.status(201).send(saving)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.get("", async (req, res) => {
    try {
        const saving = await Saving.find().lean().exec();
        res.status(201).send(saving)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = route;