import React,{useEffect} from 'react'
import {todosPersonajes} from '../funciones/funciones'

const Inicio=()=> {
    useEffect(()=>{
        todosPersonajes()
    
     },[])
    return(
        <div>Inicio asdasd as </div>
    )
}
export default Inicio