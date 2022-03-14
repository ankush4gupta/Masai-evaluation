
const mongoose = require("mongoose")

const branchschema = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    IFSC: { type: String, required: true },
    MICR: { type: Number, required: true }

}, {

    timestamps: true
})
module.exports = mongoose.model("branch", branchschema)