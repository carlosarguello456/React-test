
import React from 'react';
import Pelicula from './Pelicula';
function TiraDePeliculas(){
    return(
     <div > 
       <Pelicula generos={["Accion","Aventura"]}rating={9} titulo ="Aladdin"/>
       <Pelicula generos={["Accion","Aventura"]}rating={9} titulo ="Interestelar"/>
       <Pelicula generos={["Accion","Aventura"]}rating={9} titulo ="Rey leon"/>
       <Pelicula generos={["Accion","Aventura"]}rating={9} titulo ="Cenicienta"/>
       <Pelicula generos={["Accion","Aventura"]}rating={9}/>
     </div>
    );
   }
   export default TiraDePeliculas;