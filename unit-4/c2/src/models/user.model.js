const mongoose = require("mongoose")

const Usershema = mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: false, default: "Female" },
    type: { type: String, default: "Customer" },
})
module.exports = mongoose.model("users", Usershema)