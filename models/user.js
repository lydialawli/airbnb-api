const mongoose = require('mongoose')

const User = mongoose.model('user', {
  avatar: {
    type: String,
    default: "https://randomuser.me/api/portraits/lego/1.jpg"
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  location: {
    type: String,
    required: [true, 'Location is required']
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'place'
  }]
})

module.exports = User