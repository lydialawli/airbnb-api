require('dotenv').config()

// mongoose deprecation warnings prevention
const mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

// Express
const express = require('express')

// Express API
const app = express()

// Database
const database = require('./controllers/database')

// Middleware
const bodyParser = require('body-parser')
const cors = require('cors')

// multer middleware
const multerUploads = require('./middleware/multerUpload')
const Datauri = require('datauri')
const cloudinaryConfig = require('./config/cloudinaryConfig')
const path = require('path')
const cloudinary = require('cloudinary')
const dUri = new Datauri()
const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);


app.use(express.static(path.join(__dirname, 'src/public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({ credentials: true }))
app.use('*', cloudinaryConfig)


// Routes
app.get('/favorites', require('./controllers/getFavorites'))

app.get('/places/:id', require('./controllers/getPlace'))
app.get('/', require('./controllers/root'))
app.get('/places', require('./controllers/getPlaces'))
app.post('/places', require('./controllers/postPlaces'))
// app.post('/places', upload.array('photos', 9), require('./controllers/postPlaces'))
app.patch('/places/:id', require('./controllers/patchPlace'))
app.delete('/places/:id', require('./controllers/deletePlace'))

app.post('/type', require('./controllers/postType'))
app.get('/types', require('./controllers/getTypes'))

app.post('/users', require('./controllers/postUsers'))
app.get('/users', require('./controllers/getUsers'))
app.patch('/users', require('./controllers/patchUser'))

app.post('/amenities', require('./controllers/postAmenities'))
app.get('/amenities', require('./controllers/getAmenities'))

app.post('/reviews', require('./controllers/postReviews'))
app.get('/reviews/:id', require('./controllers/getReviews'))

app.post('/signup', require('./controllers/postSignup'))
// app.post('/signup', upload.single('avatar'), require('./controllers/postSignup'))
app.post('/login', require('./controllers/postLogin'))
app.post('/pay', require('./controllers/pay'))
app.get('/auth', require('./controllers/auth'))

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
app.post('/upload', multerUploads, (req, res) => {
  if (req.file) {
    const file = dataUri(req).content

    return cloudinary.uploader.upload(file).then((result) => {
      const image = result.url;
      return res.status(200).json({
        messge: 'Your image has been uploded successfully to cloudinary',
        data: {
          image
        }
      })
    }).catch((err) => res.status(400).json({
      messge: 'someting went wrong while processing your request',
      data: {
        err
      }
    }))
    // console.log('req.file :', file)

  }

});

// Run server
app.listen(process.env.PORT, () => {
  console.log('Ready on port ' + process.env.PORT)
})