const Review = require('../models/review')
const Place = require('../models/place')

module.exports = (req, res) => {

    Review.find({place:req.params.id})
        // .populate({
        //     path: 'place',
        //     select: 'id images'
        // })
        .then(data => res.send(data))

        .catch(err => { console.log(err) })
}




