const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')
const UserDetailController = require('../controllers/UserDetailController')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/userdetail', UserDetailController.detailForm)
router.get('/algorithm', UserDetailController.findAll)

module.exports = router
