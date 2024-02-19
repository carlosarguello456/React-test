import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './Component/Inicio'
import Personaje from './Component/Personaje'
function App() {
  return (
    
      <div className="Contenedor">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
          </Routes>
        </BrowserRouter>
       
      </div>
 
  );
}

export default App;
