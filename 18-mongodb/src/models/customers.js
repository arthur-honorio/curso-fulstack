const mongoose = require("mongoose")

const scheema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String
})

const Model = mongoose.model("customers", scheema)

module.exports = Model 