const express = require('express')
const router =  express.Router()

const {login,Register}= require('../controller/controller')

router.post('/login',login)
router.post('/Register',Register)

module.exports =router