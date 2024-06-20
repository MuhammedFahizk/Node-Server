const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()

const verifyAuth = (req,res,next) => {
    // const token = req.cookie.token
 
    if(!req.cookies.token){
        return res.status(401).json({error:"Please authenticate using a valid token"})
    }
    else {
        jwt.verify(req.cookies.token, 'jwt-expire-token', (err, decode) => {
            if (err) return res.json('token is wrong')
                next()
        })
    }
}
const Auth = (req,res,next) => {
    // const token = req.cookie.token
 
    if(req.cookies.token){
        return res.status(401).json({error:"already see authentication"})
    }
    else {
        next()
    }
}
const index = require('../controller/index')
router.get('/', Auth, index.LoginPage )
router.get('/home', verifyAuth, index.home )

router.post('/signUp', index.signUp )
router.post('/login', index.login )
router.get('/login', Auth, index.LoginPage )



module.exports = router
