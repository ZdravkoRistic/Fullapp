const express = require('express')
const mongoose = require('mongoose')
const { DB_URL } = require('./config/config')


const app = express()


mongoose.connect(DB_URL)
.then(() =>console.log("MongoDB Connected!"))
.catch((error) => console.log(error))

app.use(express.static(__dirname + "/frontend"))
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.set("view engine", "ejs");
app.use('/', require('./routes'))





app.listen(8000, ()=>{
    console.log("Listening on port 8000....")
})

