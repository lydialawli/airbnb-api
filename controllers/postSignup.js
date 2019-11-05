const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Datauri = require('datauri')
const path = require('path')
const dUri = new Datauri()
const cloudinary = require('cloudinary')
const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer)

module.exports = (req, res) => {
  // let encrypted = bcrypt.hashSync(req.body.password, 10)

  // req.body.password = encrypted

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) { res.send(false) }
      else {
        if (req.file) {
          const file = dataUri(req).content

          return cloudinary.uploader.upload(file).then((result) => {
            const image = result.url
            
            return res.status(200).json({
              messge: 'Your image has been uploded successfully to cloudinary',
              data: {
                image
              }
            })
          }).catch((err) => res.status(400).json({
            messge: 'someting went wrong while processing your request',
            data: {
              err
            }
          }))
          // console.log('req.file :', file)

        }

        // User.create(req.body).then(user => {

        //   let obj = user.toObject()

        //   let token = jwt.sign(obj, process.env.SECRET)
        //   res.send(token)
        // })
        //   .catch(err => console.log(err))

      }


    })

    .catch(err => console.log(err))
}