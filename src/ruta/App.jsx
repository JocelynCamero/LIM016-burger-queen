import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../estilo/App.scss';
import InicioSesion from '../pagina/InicioSesion';
import VistaMesero from '../pagina/VistaMesero';
import Desayuno from '../contenedor/Desayuno';
import Almuerzo from '../contenedor/Almuerzo';
import Notificaciones from '../contenedor/Notificaciones';
import Pedidos from '../contenedor/Pedidos';
import AppContext from '../contexto/AppContext';
import useInitialState from '../hook/useInitialState';

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
