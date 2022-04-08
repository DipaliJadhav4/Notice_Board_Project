const db=require('./db')
const utils=require('./utils')
const express=require('express')
const multer = require('multer')
const upload = multer({ dest: 'thumbnails/'})
//const cryptoJs = require('crypto-js')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from notice`
    connection.query(statement, (error, data) => {
        connection.end()
        console.log(data)
        const notices = []
        for (let index = 0; index < data.length; index++) {
            const notice = data[index]
            notices.push({
                noticeId: notice['noticeId'],
                title: notice['title'],
                description:notice['description'],
                photo:notice['photo']
            })
        }
        console.log('******************************')
        console.log(notices);
        response.send(utils.createresult(error, notices))
    })
})



router.get('/allNotices', (request, response) => {
    const connection = db.connect()
    const statement = `select * from notice`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createresult(error, data))
    })
})

router.post('/addNotice',upload.single('photo'), (request, response) => {
    console.log(request.body)
    const {title,description} = request.body
    const photo = request.file.filename
    console.log("photo :"+photo)
    const connection = db.connect()
       
            const statement = `insert into notice (title,description,photo) values('${title}','${description}','${photo}')`
            
            connection.query(statement, (error, data) => {
                
                 console.log(statement)
                connection.end()
                response.send(utils.createresult(error, data))
               // console.log('data :'+response['data'])
            })
       
    })

    router.put('/withPhoto/:noticeId',upload.single('photo'), (request, response) => {
        const {noticeId} = request.params
        const {title,description} = request.body
        const photo = request.file.filename
        const connection = db.connect()
        const statement = `update notice set title = '${title}',description =  '${description}', photo = '${photo}' where noticeId = ${noticeId}`
        connection.query(statement, (error, data) => {
            connection.end()
            response.send(utils.createresult(error, data))
        })
    })

    router.get('/details/:noticeId', (request, response) => {
        const {noticeId} = request.params
        const connection = db.connect()
        const statement = `select notice.* from notice where notice.noticeId = ${noticeId}`
        connection.query(statement, (error, notices) => {
            connection.end()
            if (notices.length > 0) {
                response.send(utils.createresult(error, notices[0]))
            } else {
                response.send(utils.createresult('notice does not exist'))
            }
        })
    })

    router.get('/:noticeId', (request, response) => {
        const {noticeId} = request.params
        const connection = db.connect()
        const statement = `select notice.* from notice where notice.noticeId = ${noticeId}`
        console.log(statement)
        connection.query(statement, (error, data) => {
            connection.end()
            if (data.length > 0) {
                response.send(utils.createresult(error, data[0]))
            } else {
                response.send(utils.createresult('notice does not exist'))
            }
        })
    })
    
    router.delete('/:noticeId', (request, response) => {
        const {noticeId} = request.params
        const connection = db.connect()
        const statement = `delete from notice where noticeId = ${noticeId}`
        connection.query(statement, (error, data) => {
            connection.end()
            response.send(utils.createresult(error, data))
        })
    })
    

module.exports=router