const mongoose = require("mongoose")

const savingshema = mongoose.Schema({
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    startDate: { type: Date, required: true },
    maturityDate: { type: Date, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    branch_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "branch" }

}, {
    timestamps: true
})
module.exports = mongoose.model("fixed", savingshema)