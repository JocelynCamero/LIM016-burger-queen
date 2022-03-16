import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import InicioSesion from './Componentes/InicioSesion';
import VistaMesero from './Componentes/VistaMesero';
import Desayuno from './Componentes/Desayuno';
import Almuerzo from './Componentes/Almuerzo';
import Notificaciones from './Componentes/Notificaciones';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/VistaMesero" element={<VistaMesero />} />
        <Route path="/Desayuno" element={<Desayuno />}>
          <Route path="/Desayuno/:nombre" element={<Desayuno />} />
        </Route>
        <Route path="/Almuerzo" element={<Almuerzo />}>
          <Route path="/Almuerzo/:nombre" element={<Almuerzo />} />
        </Route>
        <Route path="/Notificaciones" element={<Notificaciones />}>
          <Route path="/Notificaciones/:categorias" element={<Notificaciones />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
