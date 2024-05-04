
const Users = require("../src/models/register")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const home = async(req,res)=>{
   try{
    res.status(200).send("welcome to sam router controllers world")
   }catch(err){
      console.log(err)
   }
}


const register = async(req,res) => {
    try{
        console.log(req.body)
        const {name, email,password} = req.body

        const userExist = await Users.findOne({email:email})

        if ( userExist ){
            return res.status(400).json({msg:"email already exists"})
        }
        
        const userCreated = await Users.create({name,email,password})

        res.status(200).json({
         message:userCreated,
         token: await userCreated.generateToken(), userId:userCreated._id.toString()})

  
    }
    catch(err){
        res.status(500).send("internal server error")
        console.log(err)
    }
  
}


const login = async(req,res)=>{
  try{

    const email = req.body.email
    const pass = req.body.password
    console.log(pass)
    // promise
    const dbres = await Users.findOne({email:email})

    console.log(pass + dbres.password)
    // promise return krta h
    const isMatch = await bcrypt.compare(pass, dbres.password)

    console.log(isMatch)

       if ( isMatch === true){

        // res.status(200).json({
        //     msg:"logged in!"

        // })
        res.status(200).json({
          message:dbres,
          token: await dbres.generateToken(), userId:dbres._id.toString()})
          
        // res.status(201).render("index")
       }
       else {
        console.log("pass")
        res.send("invalid credentials")
       }

      
   
  }catch(err){
    res.status(500).send("internal server error")
    console.log(err)
  }
}
module.exports = {home,register,login}