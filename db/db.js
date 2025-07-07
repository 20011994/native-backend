const mongoose = require("mongoose")

const dbConnection = () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.3")
              console.log("mongodb connected .....")
    } catch (error) {
        console.log("mongodb connection failed.....")
    }
}

module.exports = dbConnection