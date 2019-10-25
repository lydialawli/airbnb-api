const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
  User.findOne({
      email: req.body.email
    }).select('name email password avatar location')
    .then(user => {
      if (!user)
        res.send('user or password incorrect')
      else {
        let match = bcrypt.compareSync(req.body.password, user.password)

        if (match) {
          delete user.password
          let obj = user.toObject()
          let token = jwt.sign(obj, process.env.SECRET)

          res.send({token:token})
        } else {
          res.send('wrong password')
        }
      }
    })
    .catch(err => console.log(err))
}