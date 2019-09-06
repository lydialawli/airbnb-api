const mongoose = require('mongoose')

const Place = mongoose.model('place', {
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  type: {
    type: String,
    required: [true, 'Type is required']
  },
  city: {
    type: String,
    required: [true, 'City is required']
  },
  country: {
    type: String,
    required: [true, 'Country is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  rooms: {
    type: Number,
    required: [true, 'Price is required']
  },
  rating: {
    type: Number,
    default: 0
  },
  guests: {
    type: Number,
    required: [true, 'Guests is required']
  },
  bathrooms: {
    type: Number,
    required: [true, 'Bathrooms is required']
  }
})

module.exports = Place