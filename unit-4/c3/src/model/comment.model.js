const mongoose = require("mongoose");
const Commentschema = mongoose.Schema({

    body: { type: String, require: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "user" },
    book_id: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "book" },

}, {
    versionKey: false,
    timestamps: true
})
module.exports = mongoose.model("comment", Commentschema)