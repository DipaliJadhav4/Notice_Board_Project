const db=require('mysql')

function connect()
{
    const connection=db.createConnection({
        host:'localhost',
        user:'project',
        password:'project',
        database:'projectDB',
        port:'3306'
    })
    connection.connect()
    return connection
}
module.exports={
    connect:connect
}
