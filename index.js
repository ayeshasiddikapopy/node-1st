const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const User = require('./model/user.js')

app.use(express.json())
app.listen(8000)
mongoose.connect("mongodb+srv://popymern2201:popymern2201@cluster0.lpg1xbw.mongodb.net/?retryWrites=true&w=majority")

app.get('/', function(req,res){
    
    // let {name, email , password } = req.body
    // let user = new User({
    //     name:name,
    //     email:email,
    //     password:password 
    // })
    // user.save()
    // res.send(user)
    console.log('hello')
})