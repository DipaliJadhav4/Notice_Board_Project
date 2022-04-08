const db=require('./db')
const utils=require('./utils')
const express=require('express')
const multer = require('multer')
const upload = multer({ dest: 'thumbnails/'})
//const cryptoJs = require('crypto-js')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from staff`
    connection.query(statement, (error, data) => {
        connection.end()
        console.log(data)
        const users = []
        for (let index = 0; index < data.length; index++) {
            const user = data[index]
            users.push({
                staffId: user[' staffId'],
                name: user['name'],
                address:user['Address'],
                courseId:user['courseId'],
                post:user['post'],
                email: user['email'],
                mobile_no:user['mobile_no'],
                photo:user['photo']
            })
        }
        console.log('******************************')
        console.log(users);
        response.send(utils.createresult(error, users))
    })
})



router.get('/course', (request, response) => {
    const connection = db.connect()
    const statement = `select * from course`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createresult(error, data))
    })
})

router.get('/gender', (request, response) => {
    const connection = db.connect()
    const statement = `select * from gender`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createresult(error, data))
    })
})





router.post('/login',(request,response)=>
{
    const {email,password}=request.body
   // const encriptedpass=cryptoJs.MD5(password)

    const connection=db.connect()
    
    //const encriptedpass=cryptoJs.MD5(password)
    const statement=`select * from staff where email='${email}' and password='${password}'`
    console.log(statement)
    connection.query(statement,(error,users)=>
    {
        if(users.length==0)
        {
            connection.end()
        response.send(utils.createresult(error))
        }
        else
        {
            connection.end()
            
            response.send(utils.createresult(error,users))
        }
       
    })
})
router.post('/register',upload.single('photo'), (request, response) => {
    console.log(request.body)
    const {name,post,email, password,address,mobile_no,courseId,genId} = request.body
    const photo = request.file.filename
    console.log("photo :"+photo)
    //console.log("filename"+filename)
    //const encryptedPassword = '' + cryptoJs.MD5(password)
    const connection = db.connect()

    const statement1 = `select * from staff where email = '${email}'`
    connection.query(statement1, (error, users) => {


        if (users.length == 0) {
            
          
            const statement = `insert into staff (name,address,courseId,post,email,mobile_no, password,genId,photo) values('${name}','${address}',${courseId},'${post}', '${email}',${mobile_no}, '${password}',${genId},'${photo}')`
            
            connection.query(statement, (error, data) => {
                
                 console.log(statement)
                connection.end()
                response.send(utils.createresult(error, data))
                console.log('data :'+response['data'])
            })
        } else {
           
            connection.end()
            response.send(utils.createresult('email exists. please use another email.'))
        }

    })
   
})

router.put('/:staffId',(request,response)=>
{
    const {staffId}=request.params
    const {name,address,courseId,post,email,mobile_no,photo}=request.body
    const statement=`update staff set name='${name}',address='${address}',courseId=${courseId},post='${post}',email='${email}',mobile_no=${mobile_no},photo='${photo}'where staffId='${staffId}'`
    const connection=db.connect()
    connection.query(statement,(error,data)=>
    {
        connection.end()
        response.send(utils.createresult(error,result))
    })

})

router.delete('/:staffId',(request,response)=>
{
    const {staffId}=request.params
    const statement=`delete from staff where staffId=${staffId}`
    const connection=db.connect()
    connection.query(statement,(error,data)=>
    {
        connection.end()
        response.send(utils.createresult(error,data))
    })

})


router.get('/allStaff', (request, response) => {
    const connection = db.connect()
    const statement = `select staffId,name,email,photo from staff`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createresult(error, data))
    })
})


module.exports=router