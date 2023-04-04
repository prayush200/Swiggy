
const mongoose=require('mongoose')

const UserSchema=  new mongoose.Schema({

    name:{
        type:String,
        required:[true,'Please enter your name']
    },
    location:{
        type:String,
        required:[true,'Please enter location']
    },
    email:{
        type:String,
        required:[true,'Please enter email']
    },
    password:{
        type:String,
        required:[true,'Please enter password']
    },
    Date:{
        type:Date,
        default:Date.now
    }


})

module.exports = mongoose.model("user",UserSchema)