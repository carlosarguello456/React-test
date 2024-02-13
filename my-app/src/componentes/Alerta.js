
import React, { Component } from 'react';

class Alerta extends Component{
   lanzarAlerta(){
    alert("!!PASASTE POR ENCIMA !!")
   }
   render(){

  
    return(
     <div onMouseOver={()=> this.lanzarAlerta()} > 
      <h2>Pasa por aqui</h2>
     </div>
    ); }
   }
   export default Alerta;