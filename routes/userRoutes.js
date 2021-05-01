const express = require('express')

const  router = express.Router()


router.post('/conference-details',(req,res) =>{

    const {name,School} = req.body
     console.log(name)
     console.log(School)
 
     res.send("Data Fetched")
 })


module.exports = router;