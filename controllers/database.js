const mongoose = require('mongoose')

let database = mongoose.connect('mongodb://localhost:27017/airbnb', { useNewUrlParser: true }, (err) => {
    err ? console.log(err) : console.log('Connected to MongoDB')
})


module.exports = database

