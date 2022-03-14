const mongoose = require("mongoose")

const savingshema = mongoose.Schema({
    account_Number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    branch_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "branch" }

}, {
    timestamps: true
})
module.exports = mongoose.model("saving", savingshema)