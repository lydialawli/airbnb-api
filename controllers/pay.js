const stripe = require("stripe")(process.env.STRIPE_SECRET)

module.exports = (req, res) => {
  stripe.charges.create({
      amount: req.body.amount,
      currency: 'usd',
      description: req.body.description,
      source: req.body.token
    }).then(data => {
      req.send(data)
    })
    .catch(err => req.send('error!', err))
}