const express = require("express");
const Fixed = require("../models/fixed.model")
const route = express.Router()

route.post("", async (req, res) => {
    try {
        const fixed = await Fixed.create(req.body);
        res.status(201).send(fixed)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.get("", async (req, res) => {
    try {
        const fixed = await Fixed.find().lean().exec();
        res.status(201).send(fixed)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = route;