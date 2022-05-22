const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe } = require('../controllers/userCOntroller')

router.route('/').post(registerUser)
router.route('/login').post(loginUser)
router.route('/me').post(getMe)

module.exports = router