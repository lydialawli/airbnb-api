const User = require('../models/user')

module.exports = (req, res) => {

    User.find({})
        .then(data => res.send(data))
        .catch(err => { console.log(err) })
}




