/*Forma corta de utilizar props*/
const Mensaje =({color,msg})=><h1 style={{color:color}}>{msg}</h1>

/*forma larga
* const Mensaje = (params) =>{
    return(
    <h1 style={{color:params.color}}>
        {params.msg}
    </h1>
    )
}*/


export default Mensaje;