const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    let token = req.query.token
    let user = jwt.verify(token, process.env.SECRET)

    User.findById(user._id)
        .populate('likes')
        .then(user => {
            res.send(user.likes)
        })
        .catch(err => console.log(err))
}
