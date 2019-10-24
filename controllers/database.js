const mongoose = require('mongoose')
var time = new Date()

let database = mongoose.connect(process.env.MONGODB_URI, {

  useNewUrlParser: true
}, (err) => {
  err ? console.log(err) : (
   
    console.log(`Connected to MongoDB at ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)
  )
})

module.exports = database