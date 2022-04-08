//const db=require('./db')
//const utils=require('./utils')
//const express=require('express')
//const cryptoJs = require('crypto-js')

//const router = express.Router()

// router.get('/', (request, response) => {
//     const connection = db.connect()
//     const statement = `select * from student`
//     connection.query(statement, (error, data) => {
//         connection.end()
//         console.log(data)
//         const users = []
//         for (let index = 0; index < data.length; index++) {
//             const user = data[index]
//             users.push({
//                 studentId: user['studentId'],
//                 name: user['name'],
//                 email: user['email'],
//                 mobile_no:user['mobile_no'],
//                 address:user['Address'],
//                 courseId:user['courseId'],
//                 photo:user['photo']
//             })
//         }
       
//         //console.log(users);
//         response.send(utils.createresult(error, users))
//     })
// })

// router.post('/login',(request,response)=>
// {
//     const {email,password}=request.body
//    // const encriptedpass=cryptoJs.MD5(password)

//     const connection=db.connect()
    
//     //const encriptedpass=cryptoJs.MD5(password)
//     const statement=`select * from student where email='${email}' and password='${password}'`
    
//     connection.query(statement,(error,users)=>
//     {
//         if(users.length==0)
//         {
//             connection.end()
//         response.send(utils.createresult(error))
//         }
//         else
//         {
//             connection.end()
//             response.send(utils.createresult(error,users))
//         }
       
//     })
// })
// router.post('/register', (request, response) => {
//     const {name,address,courseId,email,mobile_no, password,photo} = request.body
    
//     //const encryptedPassword = '' + cryptoJs.MD5(password)
//     const connection = db.connect()

//     const statement1 = `select * from student where email = '${email}'`
//     connection.query(statement1, (error, users) => {

//         if (users.length == 0) {
            
           
//             const statement = `insert into student (name,address,courseId,email,mobile_no, password,photo) values ('${name}','${address}',${courseId},'${email}',${mobile_no}, '${password}','${photo}')`
            
//             connection.query(statement, (error, data) => {
                
//                 connection.end()
//                 response.send(utils.createresult(error, data))
//             })
//         } else {
           
//             connection.end()
//             response.send(utils.createResult('email exists. please use another email.'))
//         }


//     })

    
// })

const db=require('./db')
const utils=require('./utils')
const express=require('express')
const multer = require('multer')
const upload = multer({ dest: 'thumbnails/'})
//const cryptoJs = require('crypto-js')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from student`
    connection.query(statement, (error, data) => {
        connection.end()
        console.log(data)
        const users = []
        for (let index = 0; index < data.length; index++) {
            const user = data[index]
            users.push({
                studentId: user[' studentId'],
                name: user['name'],
                address:user['address'],
                courseId:user['courseId'],
                email: user['email'],
                mobile_no:user['mobile_no'],
                genId:user['genId'],
                photo:user['photo']
            })
        }
        console.log('******************************')
        console.log(users);
        response.send(utils.createresult(error, users))
    })
})



router.get('/allStudent', (request, response) => {
    const connection = db.connect()
    const statement = `select studentId,name,email,photo from student`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createresult(error, data))
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
    const statement=`select * from student where email='${email}' and password='${password}'`
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
    const {name,address,courseId,email,mobile_no,genId, password} = request.body
    const photo = request.file.filename
    //console.log("photo"+photo)
    //console.log("filename"+filename)
    //const encryptedPassword = '' + cryptoJs.MD5(password)
    const connection = db.connect()

    const statement1 = `select * from student where email = '${email}'`
    connection.query(statement1, (error, users) => {

        if (users.length == 0) {
            
          
            const statement = `insert into student (name,address,courseId,email,mobile_no, password,genId,photo) values ('${name}','${address}',${courseId}, '${email}',${mobile_no}, '${password}',${genId},'${photo}')`
            
            connection.query(statement, (error, data) => {
                

                connection.end()
                response.send(utils.createresult(error, data))
            })
        } else {
           
            connection.end()
            response.send(utils.createresult('email exists. please use another email.'))
        }


    })

    
})


router.put('/:studentId',(request,response)=>
{
    const {studentId}=request.params
    const {name,address,courseId,email,mobile_no,genId,photo}=request.body
    const statement=`update student set name='${name}',address='${address}',courseId=${courseId},email='${email}',mobile_no=${mobile_no},genId=${genId},photo='${photo}'where studentId='${studentId}'`
    const connection=db.connect()
    connection.query(statement,(error,data)=>
    {
        connection.end()
        response.send(utils.createresult(error,result))
    })

})

router.delete('/:studentId',(request,response)=>
{
    const {studentId}=request.params
    const statement=`delete from student where studentId=${studentId}`
    const connection=db.connect()
    connection.query(statement,(error,data)=>
    {
        connection.end()
        response.send(utils.createresult(error,data))
    })

})


module.exports=router