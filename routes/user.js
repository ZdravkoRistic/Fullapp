const { Router } = require('express')
const router = new Router()




// POST
router.post('/add', require('../controler/userContoler/addUser'))



module.exports = router