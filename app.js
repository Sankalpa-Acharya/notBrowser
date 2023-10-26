const express = require('express')
const cors = require('cors')
const homeRoute = require('./routes/appRoute')
const app = express()
app.use(cors())
app.use(express.static('public'));
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',homeRoute)


app.listen(3000,()=>{
    console.log('starting......')
})

