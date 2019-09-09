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
        .populate({
            path: 'type',
            select: 'rooms city country images price reviews title type'
        })

    let getPlaces = () => {
        return new Promise = (res, rej) => {
            places.map(place => { 
                getReviews(place)
                .then(res =>{
                    place.reviews = res
                })
                .catch(e => console.log(e))
            }).then( (mapResult) => {res(mapResult)})
        }
    }

    let getReviews = (place) => {
        return new Promise =(res, rej) => {
            Review.find({ place: place._id })
            .then((reviews) => {res(reviews)})
        }
    }

       
    getPlaces()
    .then(res => res.send())
    .catch(err => { console.log(err) })
}




