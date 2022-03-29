import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../estilo/App.scss';
import InicioSesion from '../paginas/InicioSesion';
import VistaMesero from '../paginas/VistaMesero';
import Desayuno from '../contenedores/Desayuno';
import Almuerzo from '../contenedores/Almuerzo';
import Notificaciones from '../contenedores/Notificaciones';
import Pedidos from '../contenedores/Pedidos';
import AppContext from '../contextos/AppContext';
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
          <Route path="/Pedidos" element={<Pedidos />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
