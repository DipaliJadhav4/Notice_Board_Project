const db=require('./db')
const utils=require('./utils')
const express=require('express')
//const cryptoJs = require('crypto-js')

const router = express.Router()

// router.get('/', (request, response) => {
//     const connection = db.connect()
//     const statement = `select * from admin`
//     connection.query(statement, (error, data) => {
//         connection.end()
//         const admins = []
//         for (let index = 0; index < data.length; index++) {
//             const admin = data[index]
//             admins.push({
//                 admin_id: admin['admin_id'],
//                 username: admin['user_name'],
//                 phone_no:admin['phone_no'],
//                 email_id: admin['email_id']
//             })
//         }
        
//         response.send(utils.createresult(error, admins))
//     })
// })

router.post('/login',(request,response)=>
{
    const {email,password}=request.body
    console.log('in server'+email,password)
   

    const connection=db.connect()
    
    //const encriptpass=cryptoJs.MD5(password)
    const statement=`select * from admin where email='${email}' and password='${password}'`
    //console.log(statement)
    
    connection.query(statement,(error,users)=>
    {
        if(users.length==0)
        {
            connection.end()
            response.send(utils.createresult('error',users))
        }
        else{
            connection.end()
            response.send(utils.createresult(error,users))
        }
    })
})
// router.post('/register', (request, response) => {
//     //const {user_name,gender,phone_no, email_id, password} = request.body
//     const {user_name,phone_no, email_id, password} = request.body
    
//     const encryptedPassword = '' + cryptoJs.MD5(password)
//     const connection = db.connect()

//     const statement1 = `select * from admin where email_id = '${email_id}'`
//     connection.query(statement1, (error, admins) => {

//         if (admins.length == 0) {
            
//             //const statement = `insert into admin (user_name,gender,phone_no,email_id, password) values ('${username}','${gender}',${phone_no}, '${email}', '${encryptedPassword}')`
//             const statement = `insert into admin (user_name,phone_no,email_id, password) values ('${user_name}',${phone_no}, '${email_id}', '${encryptedPassword}')`
            
//             connection.query(statement, (error, data) => {
//                 connection.end()
//                 console.log('response.error : '+response.error)
//                 response.send(utils.createresult(error, data))
//             })
//         } else {
           
//             connection.end()
//             response.send(utils.createResult('email exists. please use another email.'))
//         }


//     })

    
// })

// router.put('/:id',(request,response)=>
// {
//     const {id}=request.params
//     const {user_name,phone_no,email_id}=request.body
//     const statement=`update admin set user_name='${user_name}',phone_no=${phone_no},email_id='${id} where id='${id}`

// })


module.exports=router