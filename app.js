const express = require('express')
const app = express()
const port = 4000

app.get('/' , (req, res)=> {res.send('App is working correctly')})


app.listen(port)