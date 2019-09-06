// Express
const express = require('express')

// Express API
const app = express()

// Database
const database = require('./controllers/database')

 
// Middleware
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.get('/', require('./controllers/root'))
app.get('/places', require('./controllers/getPlaces'))
app.get('/places/:id', require('./controllers/getPlace'))
app.post('/places', require('./controllers/postPlaces'))
app.patch('/places/:id', require('./controllers/patchPlace'))
app.delete('/places/:id', require('./controllers/deletePlace'))



// Run server
app.listen(5000, () => {
    console.log('Ready on port 5000')
})

