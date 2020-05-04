const express = require('express')
const app = express()
const port = 3000

app.get('/' , (req, res)=> {res.send('App is working correctly!!!')})


var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port)