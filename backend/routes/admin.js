const { Router } = require('express')
const router = new Router()

router.get('/', require('../controler/adminControler/admin'))



module.exports = router