const express=require('express')
const bodyParser = require('body-parser')

const routeadmin=require('./admin')
const routestaff=require('./staff')
const routestudent=require('./student')
const routenotice=require('./notice')
const app=express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    next();
});
app.use(bodyParser.json())

app.use('/admin',routeadmin)
app.use('/staff',routestaff)
app.use('/student',routestudent)
app.use('/notice',routenotice)
app.use(express.static('thumbnails'))


app.listen(4500,'0.0.0.0',()=>
{
    console.log('Server started successfully on port 4500')
})