const Place = require('../models/place')

module.exports = (req, res) => {
    Place.findById(req.params.id)
        .populate({
            path: 'host',
            select: 'name avatar'
        })
        .then(data => {
            res.send(data)
        })
        .catch(err => console.log(err))
}