const Place = require('../models/place')
const Review = require('../models/review')

module.exports = (req, res) => {
  Place.findById(req.params.id)
    .populate({
      path: 'host',
      select: 'name avatar'
    })
    .populate('amenities type')
    .lean()
    .then(place => {
      Review.find({
        place: place._id
      })
        .populate('author')
        .then(reviews => {
          let sum = 0
          place.reviews = reviews
          reviews.forEach(e => {
            sum += e.rating
          })
          place.image = place.images[0]
          place.rating = Math.round(sum / reviews.length)
          res.send(place)
        })
        .catch(err => {
          console.log(err)
        })

    })
    .catch(err => console.log(err))
}