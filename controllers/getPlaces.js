const Place = require('../models/place')
const Review = require('../models/review')

module.exports = (req, res) => {

    search = () => {
        let queries = {}

        req.query.max_price ? queries.price = { $lte: req.query.max_price } : null
        req.query.min_rooms ? queries.rooms = { $gte: req.query.min_rooms } : null
        req.query.min_guests ? queries.guests = { $gte: req.query.min_guests } : null
        return queries
    }

		Place.find({})
			.populate('type')
			.lean().then(data => {
			let places = data.map(p => {
				return Review.find({place: p._id})
				.then(reviews => {
					p.reviews = reviews.length
					p.image = p.images[0]
					delete p.images
					return p
				})
			})
			Promise.all(places)
			.then(data => {res.send(data)})
			.catch(err => { console.log(err) })
		})
}
