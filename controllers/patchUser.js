const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    let token = req.query.token
    let user = jwt.verify(token, process.env.SECRET)

    User.findById(user._id)
        .lean()
        .then(user => {
            let placeId = req.body.place
            let likes = user.likes.map(like => like.toString())

            if (placeId) {
                if (likes.includes(placeId))
                    user.likes = user.likes.filter(l => {
                        l.toString() !== placeId
                    })
                else {
                    user.likes.push(placeId)
                }
            }

            User.findByIdAndUpdate(user._id, user, { new: true })
                .then(updatedUser => res.send(updatedUser))

        })

        .catch(err => console.log('patchUser err', err))
}