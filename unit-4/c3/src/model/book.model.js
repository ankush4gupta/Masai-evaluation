const mongoose = require("mongoose");
const Bookschema = mongoose.Schema({
    like: { type: Number, require: false, default: null },
    coverImage: { type: String, require: true },
    content: { type: String, require: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "user" },

}, {
    versionKey: false,
    timestamps: true
})
module.exports = mongoose.model("book", Bookschema)