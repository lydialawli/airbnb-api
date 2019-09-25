const mongoose = require('mongoose')

const User = mongoose.model('user', {
  avatar: {
    type: String,
    default: "https://randomuser.me/api/portraits/lego/1.jpg"
  },
  email: {
    type: String,
    required: [true, 'Name is required']
  },
  location: {
    type: String,
    required: [true, 'Name is required']
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  password: {
    type: String,
    required: [true, 'Name is required'],
    select: false
  }
})

module.exports = User