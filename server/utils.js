function createresult(error,data)
{
    const result={}
    if(error)
    {
        console.log('error : '+error)
        result.status='error'
        result.error=error
        console.log(error)
    }
    else
    {
        result.status='success'
        result.data=data
    }
    return result
}
module.exports={
    createresult:createresult
}