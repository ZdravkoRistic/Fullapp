const { Router } = require('express')
const router = new Router()




// POST
// mozda treba prepraviti putanju

router.post('/', require('../controler/loginContoler/userLogin'))



module.exports = router