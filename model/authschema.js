const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        lowercase:true,
    },
    password: {
        type: String,
        required:true,
    },
    confirmpassword: {
        type: String,
        required:true,
    },
    createdAt: {
        type: Date,
        default:Date.now,
    }

})

const authdata = mongoose.model("Registerdata", authSchema)

module.exports = authdata
