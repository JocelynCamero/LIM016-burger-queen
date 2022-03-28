import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../Estilos/App.scss';
import InicioSesion from '../Paginas/InicioSesion';
import VistaMesero from '../Paginas/VistaMesero';
import VistaCocina from '../Paginas/VistaCocina';
import Desayuno from '../Contenedores/Desayuno';
import Almuerzo from '../Contenedores/Almuerzo';
import Notificaciones from '../Contenedores/Notificaciones';
import Pedidos from '../Contenedores/Pedidos';
import AppContext from '../Context/AppContext';
import useInitialState from '../Hooks/useInitialState';

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
