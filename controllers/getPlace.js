const Place = require('../models/place')
const Review = require('../models/review')

module.exports = (req, res) => {
    Place.findById(req.params.id)
        .populate({
            path: 'host',
            select: 'name avatar'
        })
        .populate('amenity')
				.lean()
        .then(place => {
					Review.find({place: place._id})
					.then(reviews => {
						let sum = 0
						place.reviews = reviews.length
						reviews.forEach(e=>{
							sum += e.rating
						})
						place.rating = Math.round(sum/reviews.length)
						res.send(place)
					})

        })
        .catch(err => console.log(err))
}
