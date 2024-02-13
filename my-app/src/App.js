
import './App.css';
import Contador from './componentes/Contador';
import './componentes/Estilos.css'
import Publicidad from './componentes/Publicidad';

import TiraDePeliculas from './componentes/TiraDePeliculas';
import Alerta from './componentes/Alerta';
import Board from './componentes/Board';
import Gallery from './componentes/Gallery';
function App(){
  
 return(
  <div ClassName="App"> 
  <Gallery/>
   <Board/>
  <Publicidad>
    <h3>Esto es publicidad</h3>
  </Publicidad>
    <TiraDePeliculas/>
    <Contador/>
  
    
    <Alerta/>
  </div>
 );
}
export default App;