const mongoose = require('mongoose')

const Review = mongoose.model('review', {
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'User is required']
    },
    date: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number,
        default: 0
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    },
    place: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'place',
        required: [true, 'Place is required']
    },
})

module.exports = Review