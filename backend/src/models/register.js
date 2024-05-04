const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require('dotenv').config();

console.log(process.env.JWT_SECRET_KEY)
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
  
    email: {
        type:String,
        required:true,
        unique: [ true, "already present"],
        validate(value){
            if ( !validator.isEmail(value)){
                throw new Error ("invalid email")
            }
        }
    },

    password : {
         type: String,
         required: true,

    }
})
//
// manually function likhna padega kyuki arrow kaam nhi krta yaha
// pre -> middleware hai save aur doc get krne ke beech me run karega 
// yani jab user ki saari info mil jaega doc me to save call hone se pehle
//  ye call hoga aur password ko hash kardega
// step1: bcrypt ko require karo
// step2 : middleware pre function ko call karo

// schema.pre("kisse pehle","kya")
userSchema.pre("save",  async function (next){
    if ( this.isModified("password"))
{
    // hash("kya","kitne round tak hashing karen jitna jada hoga utna secure hoga but time bhi jada lega jaise 10 round wala 159 days lega decode hone me to best yahi rahega. rel kam samay aur sufficiently secure bhi, maxm=12")
    // promise
    this.password = await bcrypt.hash(this.password,10)
    // to not store the confirm password in the db 
    // this.confirmPassword = undefined
    // console.log(this.password)
}
    next()
    // isse vo hash krne ke baad next function ki taraf bhej dega jo ki yaha "save" h
})
userSchema.methods.generateToken = async function(){
    try{
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            // isAdmin:this.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d"

        })
    }catch(err){
        console.log(err)
    }
}
const Users = new mongoose.model( "User", userSchema );

module.exports = Users;