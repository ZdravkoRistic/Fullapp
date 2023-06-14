const express = require('express')
const router = new express.Router()

router.use('/', require('./home'))
router.use('/user', require("./user"))
router.use('/login', require('./login'))
router.use('/admin', require('./admin'))



module.exports = router