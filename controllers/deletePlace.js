const Place = require('../models/place')

module.exports = (req, res) => {
    Place.findByIdAndDelete(req.params.id)
        .then(data => {
            res.send(data)
        })
        .catch(err => console.log(err))
}