const mongoose = require("mongoose")

module.exports = () => {
    return mongoose.connect("mongodb+srv://ankush:ankush_123@cluster0.eieya.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}