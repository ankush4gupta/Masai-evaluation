const mongoose = require("mongoose")

module.exports = () => {
    return mongoose.connect("mongodb+srv://ankush:ankush_123@cluster0.agxkw.mongodb.net/bank?authSource=admin&replicaSet=atlas-w63zcs-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true")
}