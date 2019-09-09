const Amenity = require('../models/amenity')

module.exports = (req, res) => {
    Amenity.create(req.body)
        .then(data => res.send(data))
        .catch(err => { console.log(err) })
}

