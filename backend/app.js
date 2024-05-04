const express = require("express");
// inbuid module in node like express is framework of node
//connecting public folder
// step:p1
const path = require("path")

const Users = require("./models/register")

// login ke liye
const bcrypt = require("bcryptjs")

// req to use partials in our express app
// UsingPartials:1
const hbs = require("hbs");
const { log } = require("console");

const app = express();
const port = process.env.PORT || 3000;
require("./db/conn")

// path.join(__dirname) is giving the path of root directory (src)
// console.log(path.join(__dirname))
// step:p2
const  static_path = path.join(__dirname, "../public")// it is gining path of public directory

// using views (inside templates) agar viewa directly registration folder ke andar hota to ye likhne ki jarurat nhi padti
const  views_path = path.join(__dirname, "../templates/views")
// partials ka path
const partials_path = path.join(__dirname, "../templates/partials")


// use static path
// step:p3
app.use(express.static(static_path))
// ------------------- end,  express is now using static folder public   ----------

// seting view engine
// step:ve1
// kyuki ab index.html nhi h to hbs render hoga
app.set("view engine", "hbs")

//step2 to use views jo ki ab templates ke andar h
app.set("views", views_path)

// app ko batana padega ki hum partials use kar rahe aur vo kaha hai
// UsingPartials: 2
hbs.registerPartials(partials_path)

// to using form data
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get("/", (req,res) => {
    //  res.send("hello from the sam")
    // step:ve2
    res.render("index")

})
app.get("/register", (req,res) => {
    res.render ("register")
})
app.get("/login", (req,res) => {
    res.render("login")
})

app.post("/register", async(req,res) => {
    console.log
    (req.body.email)
    try{
       const pass = req.body.password;
       const cpass = req.body.confirmPassword;
       if ( cpass == pass ){
    //   res.send( `<h1>you have successfully registered</h1>`)
      const doc = new Users({
        name:req.body.name,
        mobile:req.body.mobile,
        email:req.body.email,
        address:req.body.address,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword
        

      })
    

      const saveddoc = await doc.save()
      res.status(201).render("index")
}
     else {
        
        console.log("not")
        res.send(`<div><center><h2>passwords are not matching</h1></center></div>`)
       
     }

       

    }
    catch(err){
        console.log(req.body.email)
        res.status(400).send(err);
        console.log(err)
    }
   
})

app.post("/login", async(req,res) => {
    try{
        const email = req.body.username
        const pass = req.body.password
        // promise
        const dbres = await Users.findOne({email:email})
        console.log(pass + dbres.password)
        // promise return krta h
        const isMatch = await bcrypt.compare(pass, dbres.password)
        console.log(isMatch)
           if ( isMatch === true){
            res.status(201).render("index")
           }
           else {
            console.log("pass")
            res.send("invalid credentials")
           }
       
       
    }catch(err){
          res.status(400).send(err)
    }
})
app.listen( port, ()=>{
    console.log(`success....at port: ${port}`)

})

