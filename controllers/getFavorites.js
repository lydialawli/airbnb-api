const User = require('../models/user')
const jwt = require('jsonwebtoken')
const Type = require('../models/type')

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
            res.send(data.likes)
        })
        .catch(err => console.log(err))
}

