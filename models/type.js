const mongoose = require('mongoose')

const Type = mongoose.model('type', {
  name: {
    type: String,
    required: [true, 'Name is required']
  }
})

module.exports = Type