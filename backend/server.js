const express = require('express')
const mongoose = require('mongoose')
const { DB_URL } = require('./config/config')
const { json } = require('express/lib/response')

const app = express()


mongoose.connect(DB_URL)
.then(() =>console.log("MongoDB Connected!"))
.catch((error) => console.log(error))

app.use(express.json())

app.use('/', require('./routes'))

app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.send("Index page")
})



app.listen(8000, ()=>{
    console.log("Listening on port 8000....")
})

