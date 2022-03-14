const express = require("express");
const app = express();
const connect = require("./configs/db")
const Usercontroller = require("./controllers/user.controller")
const Savingcontroller = require("./controllers/saving.controller")
const Fixedcontroller = require("./controllers/fixed.controller")
const Branchcontroller = require("./controllers/branch.controller")

app.use(express.json())



app.use("/user", Usercontroller)
app.use("/saving", Savingcontroller)
app.use("/fixed", Fixedcontroller)
app.use("/branch", Branchcontroller)



app.use(3008, async () => {
    try {
        await connect();
        console.log("listening port 3008")
    } catch (error) {
        console.log(error.message)
    }
})