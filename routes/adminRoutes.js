const express = require('express')

const router = express.Router()


 
router.get('/admin-details',(req,res) =>{
 
 
    res.send('Admin details')

})


module.exports = router