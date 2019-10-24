const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    let token = req.query.token 
    let user = jwt.verify(token, process.env.SECRET)
    delete user.password
    res.send(user)
}