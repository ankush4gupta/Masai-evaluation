const User = require("../model/user.model");
var jwt = require('jsonwebtoken');
require("dotenv").config()
const { validationResult } = require('express-validator');



const resgister = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.send("user is already exist try with another mail id")
        }
        const filepath = req.files.map((files) => {
            return file.path;
        })
        user = await User.create({
            firstName: req.body.firstName,
            email: req.body.email,
            password: req.body.password,
            profileImage: req.filepath,
            age: req.body.age
        })
        var token = jwt.sign({ user }, process.env.JWT_KEYS);
        res.send({ user, token })

    } catch (error) {
        res.status(500).send(error)
    }
}


const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec();
        if (!user) {
            return res.send("email or password not matched");

        }
        const pass = user.checkpass(req.body.password);
        if (!pass) {
            return res.send("email or password not matched");
        }

        var token = jwt.sign({ user }, process.env.JWT_KEYS);
        res.send({ user, token })

    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = { resgister, login }