const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.get('/', require('./controllers/root'))
app.get('/places', require('./controllers/getPlaces'))


app.listen(5000, () => {
    console.log('Ready on port 5000')
})


mongoose.connect('mongodb://localhost:27017/airbnb', { useNewUrlParser: true }, (err) => {
    err ? console.log(err) : console.log('Connected to MongoDB')
})