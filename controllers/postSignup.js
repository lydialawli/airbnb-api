const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
  let encrypted = bcrypt.hashSync(req.body.password, 10)

  req.body.password = encrypted

  User.findOne({
      email: req.body.email
    })
    .then(user => {
      user ? res.send(false) : (
        User.create(req.body).then(user => {

          let obj = user.toObject()

          let token = jwt.sign(obj, `${process.env.SECRET}`)
          res.send(token)
        })
        .catch(err => console.log(err))
      )
    })

    .catch(err => console.log(err))
}