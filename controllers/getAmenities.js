const Amenity = require('../models/amenity')

module.exports = (req, res) => {

    Amenity.find({})
        .then(data => res.send(data))
        .catch(err => { console.log(err) })
}




