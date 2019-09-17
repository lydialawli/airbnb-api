const stripe = require("stripe")(process.env.STRIPE_SECRET)

stripe.charges.create({
  amount: 100,
  currency: 'usd',
  description: '',
  source: token
}).then(data => {})