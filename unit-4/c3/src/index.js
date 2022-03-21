const express = require("express");
const app = express();
const connect = require("./configs/db");
const upload = require("./middleware/upload")

app.use(express.json());
const { body } = require('express-validator');
const { resgister, login } = require("./controller/auth.controller");
app.post("/register", upload.any("profileImage"),
    body("firstName").not().isEmpty().isLength({ min: 3, max: 30 }),
    body("email").not().isEmpty().isEmail(),
    body("password").not().isEmpty().isStrongPassword(),
    body("age").not().isEmpty().isNumeric().custom((value) => {
        if (value < 1 || value > 150) {
            throw new Error("enter a valid age");

        }
        return true;
    }),
    body("profileImage").not().isEmpty(), resgister)
app.post("/login", login)



// --------------------------------------------------------------------
app.listen(3008,

    async () => {
        try {
            await connect();
            console.log("listening port 3008")

        } catch (error) {
            console.error(error.message);
        }
    })