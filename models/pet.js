// mongoose lib
const mongoose = require('mongoose')

// create mongoose schema
const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  breed: String,
})

// init model
const Pet = mongoose.model('Pet',petSchema)

// export model
module.exports = Pet