const express = require('express')
const router = express.Router()
const index = require('../controller/index')
router.get('/', index.LoginPage )
router.post('/signUp', index.signUp )
router.post('/login', index.login )


module.exports = router
