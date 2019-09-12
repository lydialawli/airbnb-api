const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = (req, res) => {
	 let encrypted = bcrypt.hashSync(req.body.password, 10)

	 User.create(req.body).then(user => {

			 res.send(user)
	 })
	 .catch(err => console.log(err))
}
