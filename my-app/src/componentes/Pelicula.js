
import React from 'react';
import PropTypes from 'prop-types';
function Pelicula(props){
    return(
     <div > 
       <h2>Soy una pelicula</h2>
       <p>Titulo :{props.titulo}</p>
       <p>Rating :{props.rating}</p>
       <ul>
        {props.generos.map ((genero, i) => <li key ={genero + i}>{genero}</li>)}
       </ul>
    
     </div>
    );

   }
   
   Pelicula.defaultProps ={
    rating: "todavia no esta puntuada",
    titulo: "No tiene titulo",
   }
   Pelicula.propTypes={
    rating: PropTypes.number,
    titulo: PropTypes.string,
   }
   
   export default Pelicula;