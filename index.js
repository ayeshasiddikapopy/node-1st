const express = require("express");
const app = express();
var jwt = require('jsonwebtoken');
const dbconnection = require("./config/db.js");
const tokenvarify = require("./middleware/tokenvarify.js");
const User = require('./model/user.js')

app.use(express.json())
app.listen(8000)
dbconnection() //mongoose database connected


app.post('/', function(req,res){
    let {name , email , password } = req.body
    let user = new User({
        name,
        email,
        password 
    })
    user.save()
    var token = jwt.sign({ email: user.email }, 'kire');
    res.send(user)
    console.log(token)
})

//user data 

app.post("/varification", async function(req,res){

    // let user = await User.find({})
    // res.send(user)
    // console.log(user)
    // console.log(req.headers.authorization)

    // verify a token symmetric - synchronous
    var decoded = jwt.verify(req.headers.authorization, 'kire');
    let updateuser =await User.findOneAndUpdate({email: decoded.email}, {varified:true}, {new:true})
    // res.send(updateuser)

    // email already exist pattern
    if(varified = true){
        console.log('true')    
        res.send('email already exist')
    }else{
        console.log('false')
        res.send(updateuser)
    }
})  

//
app.get("/user", tokenvarify, async function(req, res) {
    let user = await User.find({})
    res.send(user)
})