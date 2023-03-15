const mongoose = require('mongoose')
const {Schema} = mongoose

let userSchema = new Schema ({
    name :{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    code:{
        type:String
    },
})
module.exports = mongoose.model("User" , userSchema)