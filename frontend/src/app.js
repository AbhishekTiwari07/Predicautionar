const path = require('path')
const express = require('express')
const hbs = require('hbs')
const risk = require('./heart.js')
const risk2 = require('./dib.js')
const app = express()
const port = process.env.PORT || 3000

const dirViews = path.join(__dirname,'../template/views')
const dirPublic = path.join(__dirname,'../public')

app.set('views', dirViews)
app.set('view engine', 'hbs')

app.use(express.static(dirPublic))

app.get('/home',(req,res)=>{
    res.render('homePage')
})

app.get('',(req,res)=>{
    res.render('home')
})

app.get('/heart',(req,res)=>{
    res.render('heart')
})

app.get('/diabetes',(req,res)=>{
    res.render('dib')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/req',(req,res)=>{
    if(!req.query.info)
        return res.send('Please provide info!!!')
    risk(req.query.info,(error,response)=>{
        if(error)
            return res.send({error})
        return res.send(response)
    })
})

app.get('/dreq',(req,res)=>{
    if(!req.query.info)
        return res.send('Please provide info!!!')
    risk2(req.query.info,(error,response)=>{
        if(error)
            return res.send({error})
        return res.send(response)
    })
})

app.get('/counter',(req,res)=>{
    res.render('counter')
})

app.listen(port,(error)=>{
    if(error)
        console.log(error)
    else
        console.log('Server is up on port '+port)
})
