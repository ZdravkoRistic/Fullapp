const { Router } = require('express')
const router = new Router()

router.get('/', require('../controler/adminControler/admin'))
router.get('/create', (req, res) => {
    res.render("admin/adminCreateUser")
})
router.post('/create/save', require('../controler/adminControler/save'))



module.exports = router