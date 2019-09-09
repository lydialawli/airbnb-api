const mongoose = require('mongoose')
const Type = require('../models/type')


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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'type',
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
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'User is required']
  },
  images: [String]
})

module.exports = Place