const Review = require('../models/review')

module.exports = (req, res) => {

    Review.find({place:req.params.id})
        .populate({
            path: 'place',
            select: 'id'
        })
				.populate({
            path: 'author',
            select: 'avatar name'
        })
        .then(data => res.send(data))

        .catch(err => { console.log(err) })
}
