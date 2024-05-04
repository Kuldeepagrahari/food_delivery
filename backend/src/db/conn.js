const mongoose = require("mongoose")
// connecting to students-api db
mongoose.connect("mongodb://localhost:27017/food_delivery").then(()=>{
    console.log("connection with db  is successful..")
})
.catch((err)=>{
    console.log(err)
})

