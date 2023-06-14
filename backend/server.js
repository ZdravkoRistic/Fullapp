const express = require('express')
const mongoose = require('mongoose')
const { DB_URL, PORT, SESS_NAME, SESS_SECRET, SESS_LIFETIME, IN_PRODUCTION } = require('./config/config')
const session = require('express-session')


const app = express()


mongoose.connect(DB_URL)
.then(() =>console.log("MongoDB Connected!"))
.catch((error) => console.log(error))

app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
        maxAge: 43200000, //hard coded
        sameSite: true,
        secure : IN_PRODUCTION
    }
    }))




app.use(express.static(__dirname + "/frontend"))
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.set("view engine", "ejs");
app.use('/', require('./routes'))







app.listen(PORT, ()=>{
    console.log("Listening on port 8000....")
})

