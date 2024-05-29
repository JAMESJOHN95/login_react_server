const express = require('express')
const router = new express.Router()
const userController = require('./Controller/userController')

//Register User
router.post('/register',userController.Register)
// Login User
router.post('/login',userController.login)
// google login
router.post('/google',userController.googlelogin)

module.exports = router