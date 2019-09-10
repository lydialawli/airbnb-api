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


    Place.find(
        search()
    )
        .populate({
            path: 'type',
            select: 'rooms city country images price reviews title type'
        })

        .then(data => res.send(data))
        .catch(err => { console.log(err) })
}




