const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    let token = req.query.token
    let user = jwt.verify(token, process.env.SECRET)

    User.findById(user._id)
        .lean()
        .select('likes')
        .populate({
            path : 'likes',
            populate : {
              path : 'type'
            }
          })
        .then(data => {
          let places = data.likes
          places.forEach(p => {
            p.image = p.images[0]
          })
            res.send(places)
        })
        .catch(err => console.log(err))
}

