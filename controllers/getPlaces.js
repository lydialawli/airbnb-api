const Place = require('../models/place')
const Review = require('../models/review')

module.exports = (req, res) => {

  search = () => {
     queries = {}

    req.query.max_price ? queries.price = {
      $lte: req.query.max_price
    } : null
    req.query.min_rooms ? queries.rooms = {
      $gte: req.query.min_rooms
    } : null
    req.query.min_guests ? queries.guests = {
      $gte: req.query.min_guests
    } : null

    req.query.type ? queries = { type: req.query.type } : null
    req.query.user ? queries = { host: req.query.user } : null

    return queries
  }

  Place.find(search())
    .populate('type')
    .lean().then(data => {
      console.log('hereee ==> ',search())

      let places = data.map(p => {
        return Review.find({
          place: p._id
        })
          .then(reviews => {
            let sum = 0
            p.reviews = reviews.length
            reviews.forEach(e => {
              sum += e.rating
            })
            p.rating = Math.round(sum / reviews.length)
            p.image = p.images[0]
            delete p.images
            return p
          })
          .catch(err => {
            console.log(err)
          })
      })
      Promise.all(places)
        .then(data => {
          res.send(data)
        }).catch(err => {
          console.log(err)
        })

    }).catch(err => {
      console.log(err)
    })
}