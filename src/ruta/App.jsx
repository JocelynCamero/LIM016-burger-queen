import React from 'react';
import '../estilos/App.scss';
import InicioSesion from '../paginas/InicioSesion';
import VistaMesero from '../paginas/VistaMesero';
import VistaCocina from '../paginas/VistaCocina';
import Desayuno from '../contenedores/Desayuno';
import Almuerzo from '../contenedores/Almuerzo';
import Notificaciones from '../contenedores/Notificaciones';
import Pedidos from '../contenedores/Pedidos';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';


function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <div className="App">
        <Routes>
          <Route path="/" element={<InicioSesion />} />
          <Route path="/VistaMesero" element={<VistaMesero />}>
            <Route path="/VistaMesero/Desayuno" element={<Desayuno />} />
            <Route path="/VistaMesero/Almuerzo" element={<Almuerzo />} />
            <Route path="/VistaMesero/Notificaciones" element={<Notificaciones />} />
          </Route>
          <Route path="/VistaCocina" element={<VistaCocina />}>
            <Route path="/VistaCocina/Pedidos" element={<Pedidos />} />
          </Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;