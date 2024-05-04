const express = require("express");
const app = express();
const PORT = 3000;

const cors = require("cors")
require("./src/db/conn")

const router = require("./src/router/auth-router");
const { default: foodRouter } = require("./src/router/foodRoute");
require('dotenv').config();

//tackle cors
// const corsOptions = {
//     origin:"http://localhost:5173/",
//     method:"GET,POST,PUT,PATCH,DELETE,HEAD",
//     credentials:true
// }
// app.use(cors(corsOptions))

app.use(cors({
    origin: "http://localhost:5173", // Update with your React frontend's URL
    credentials: true
  }));
  

app.use(express.json())


app.use("/api/auth",router)

// api endpoints
app.use("/api/food", foodRouter)


app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})
