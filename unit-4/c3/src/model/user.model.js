const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Userschema = mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: false },
    email: { type: String, require: true, unique: true },
    age: { type: Number, require: true },
    password: { type: String, require: true },
    profileImage: [{ type: String, require: true }],
}, {
    versionKey: false,
    timestamps: true
})
Userschema.pre("save", function (next) {
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next()
})
Userschema.methods.checkpass = function (password) {
    return bcrypt.compareSync(password, this.password)
}
module.exports = mongoose.model("user", Userschema)