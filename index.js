require('dotenv').config()

// Express
const express = require('express')

// Express API
const app = express()

// Database
const database = require('./controllers/database')

// Middleware
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors({
  credentials: true
}))

// Routes
app.get('/places/:id', require('./controllers/getPlace'))
app.get('/', require('./controllers/root'))
app.get('/places', require('./controllers/getPlaces'))
app.post('/places', require('./controllers/postPlaces'))
app.patch('/places/:id', require('./controllers/patchPlace'))
app.delete('/places/:id', require('./controllers/deletePlace'))

app.post('/type', require('./controllers/postType'))
app.get('/types', require('./controllers/getTypes'))

app.post('/users', require('./controllers/postUsers'))
app.get('/users', require('./controllers/getUsers'))

app.post('/amenities', require('./controllers/postAmenities'))
app.get('/amenities', require('./controllers/getAmenities'))

app.post('/reviews', require('./controllers/postReviews'))
app.get('/reviews/:id', require('./controllers/getReviews'))

app.post('/signup', require('./controllers/postSignup'))

app.post('/login', require('./controllers/postLogin'))

app.post('/pay', require('./controllers/pay'))

app.post('/auth', require('./controllers/auth'))

// Run server
app.listen(process.env.PORT, () => {
  console.log(`Ready on port ${process.env.PORT}`)
})