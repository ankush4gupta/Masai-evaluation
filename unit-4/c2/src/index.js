const express = require("express");
const app = express();
const connect = require("./configs/db")
const Usercontroller = require("./controllers/user.controller")



app.use("/user", Usercontroller)



app.use(3008, async () => {
    try {
        await connect();
        console.log("listening port 3008")
    } catch (error) {
        console.log(error.message)
    }
})