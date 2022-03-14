const express = require("express");
const Master = require("../models/master.model")
const route = express.Router()

route.post("", async (req, res) => {
    try {
        const master = await Master.create(req.body);
        res.status(201).send(master)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.get("", async (req, res) => {
    try {
        const master = await Master.find().lean().exec();
        res.status(201).send(master)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
route.get("/:id", async (req, res) => {
    try {
        const master = await Master.findById().populate().lean().exec();
        res.status(201).send(master)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = route;