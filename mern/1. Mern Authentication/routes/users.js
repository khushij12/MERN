const express = require('express')
const router = express.Router()

router.get('/greeting',(req,res)=>{
    return res.status(200).send('Ok')
})

module.exports = router