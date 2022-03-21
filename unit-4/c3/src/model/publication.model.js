const mongoose = require("mongoose");
const Publicationschema = mongoose.Schema({

    name: { type: String, require: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "user" },
    book_id: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "book" },

}, {
    versionKey: false,
    timestamps: true
})
module.exports = mongoose.model("publication", Publicationschema)