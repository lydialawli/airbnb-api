const Place = require('../models/place')


module.exports = (req, res) => {
    Place.create(req.body)
        .then(data => res.send(data))
        .catch(err => { console.log(err) })
}

