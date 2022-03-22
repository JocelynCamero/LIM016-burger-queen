import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../Estilos/App.scss';
import InicioSesion from '../Paginas/InicioSesion';
import VistaMesero from '../Paginas/VistaMesero';
import VistaCocina from '../Paginas/VistaCocina';
import Desayuno from '../Contenedores/Desayuno';
import Almuerzo from '../Contenedores/Almuerzo';
import Notificaciones from '../Contenedores/Notificaciones';
import Cocina from '../Contenedores/Cocina';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/VistaMesero" element={<VistaMesero />}>
          <Route path="/VistaMesero/Desayuno" element={<Desayuno />} />
          <Route path="/VistaMesero/Almuerzo" element={<Almuerzo />} />
          <Route path="/VistaMesero/Notificaciones" element={<Notificaciones />} />
        </Route>
        <Route path="/VistaCocina" element={<VistaCocina />}>
          <Route path="/VistaCocina/Cocina" element={<Cocina />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
