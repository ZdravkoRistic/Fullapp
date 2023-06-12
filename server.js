const express = require('express')
const mongoose = require('mongoose')
const { DB_URL } = require('./config/config')
require('dotenv').config()
const app = express()

mongoose.connect('mongodb+srv://ZdravkoRistic:n36UOjF616a82OiE@freelanceprojectone.z8pucy4.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
    console.log("MongoDB Connected!");
})
.catch((error) =>{
    console.log({error:error.message});
})



app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.send("Index page")
})



app.listen(8000, ()=>{
    console.log("Listening on port 8000....")
})

