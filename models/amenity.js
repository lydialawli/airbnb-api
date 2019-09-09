const mongoose = require('mongoose')

const Amenity = mongoose.model('amenity', {
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  icon: {
    type: String,
    required: [true, 'Name is required']
  }
})

module.exports = Amenity