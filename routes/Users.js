const express = require('express')
const users = express.Router()
const bcrypt = require('bcrypt')

const User = require('../data-models/User')

users.post('/register', (req, res)=>{
    if(req.body){

    const UserData = {
        login : req.body.login,
        password : req.body.password,
        email : req.body.email
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user) {
            bcrypt.hash(req.body.password, 10, (err, hashed_pass)=>{
                UserData.password = hashed_pass
                User.create(UserData)
                .then(user=>{
                    res.json({status : user.email + " registered successfully"})
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            })
        }else{
            res.json({error : "Email already in use"})
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}else{
    res.send(req.headers)
}
})

module.exports = users