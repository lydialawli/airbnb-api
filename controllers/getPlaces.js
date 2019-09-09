const Place = require('../models/place')

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
        .populate('type')
        .populate('host')
        .then(data => res.send(data))
        .catch(err => { console.log(err) })
}




