const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/', basketController.addItem)
router.get('/:userId', basketController.getOne)

module.exports = router
