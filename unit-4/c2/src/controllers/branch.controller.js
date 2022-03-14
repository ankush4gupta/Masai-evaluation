const express = require("express");
const Branch = require("../models/branch.model")
const route = express.Router()

route.post("", async (req, res) => {
    try {
        const branch = await Branch.create(req.body);
        res.status(201).send(branch)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.get("", async (req, res) => {
    try {
        const branch = await Branch.find().lean().exec();
        res.status(201).send(branch)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = route;