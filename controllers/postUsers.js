const User = require('../models/user')

module.exports = (req, res) => {
    User.create(req.body)
        .then(data => res.send(data))
        .catch(err => { console.log(err) })
}

