const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

//
const adminRoutes = require('./routes/adminRoutes')
const userRoutes = require('./routes/userRoutes')
const { use } = require('./routes/adminRoutes')


app.use(adminRoutes)
app.use(userRoutes)



//
app.listen(8000,() =>{
    console.log('Server Started')
})








