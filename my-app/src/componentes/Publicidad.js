import React from 'react';

function Publicidad(props){

 return(
  <div > 
  
  <p> -----Inicio de publicidad----- </p>
        {props.children}
  <p> -----Fin de la publicidad----- </p>
  </div>
 );
}
export default Publicidad;