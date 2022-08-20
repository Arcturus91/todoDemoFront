// para formatear los mensajes de error que nos mande el backend

export function internalServerError(err){
    if(err.response && err.response.data && err.response.data.errorMessage){
        return {
            status:false,
            errorMessage:err.response.data.errorMessage
        }
    }
    return{
        status:false,
        errorMessage:"INTERNAL SERVER ERROR. PLEASE CHECK your server"
    }
}

export function successStatus(res){
return {
    status:true,
    data:res.data
}
}