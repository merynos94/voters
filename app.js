const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const Frontend = require('./frontendy/Frontend')
app.use(bodyParser.json())
app.use('/' ,Frontend )

//var Users = require('./routes/Users')
//app.use('/users', Users)

app.listen(port)