const Type = require('../models/type')

module.exports = (req, res) => {
    Type.create(req.body)
        .then(data => res.send(data))
        .catch(err => { console.log(err) })
}

