const Review = require('../models/review')

module.exports = (req, res) => {
    Review.create(req.body)
        .then(data => res.send(data))
        .catch(err => { console.log(err) })
}

