const Place = require('../models/place')

module.exports = (req, res) => {
    Place.findByIdAndUpdate(req.params.id, req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => console.log(err))
}