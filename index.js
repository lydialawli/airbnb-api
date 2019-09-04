const express = require('express')
const app = express()

app.get('/', (req,res)=> {
    res.send('Welcome to Airbnb API')
})

app.listen(5000, () => {
    console.log('Ready on port 5000')
})