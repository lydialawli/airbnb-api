const Type = require('../models/type')

module.exports = (req, res) => {

    Type.find({})
        .then(data => res.send(data))
        .catch(err => { console.log(err) })
}




