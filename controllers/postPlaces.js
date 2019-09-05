const Place = require('../models/place')


module.exports = (req, res) => {
    Place.create({
        title: 'Unbelievable Infinite Pool',
        description: 'blablabla',
        type: 'myHouse',
        city: 'Girona',
        country: 'Spain',
        price: 200,
        rating: 5,
        guests: 6,
        bathrooms: 2
    }).then(data =>res.send(data))
        .catch(err => { console.log(err) })
}

  