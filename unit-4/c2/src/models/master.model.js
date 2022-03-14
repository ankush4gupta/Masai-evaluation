const mongoose = require("mongoose")

const masterschema = mongoose.Schema({

    balance: { type: Number, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    branch_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "branch" },
    fixed_id: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "fixed" },
    saving_id: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "saving" }

}, {
    timestamps: true
})
module.exports = mongoose.model("master", masterschema)