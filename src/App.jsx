import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import InicioSesion from './Componentes/InicioSesion';
import VistaMesero from './Componentes/VistaMesero';
import Desayuno from './Componentes/Desayuno';
import Almuerzo from './Componentes/Almuerzo';
import Notificaciones from './Componentes/Notificaciones';
import VistaCocina from './Componentes/VistaCocina';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InicioSesion />} />
        <Route path="/VistaMesero" element={<VistaMesero />}>
          <Route path="/VistaMesero/Desayuno" element={<Desayuno />}>
            <Route path="/VistaMesero/Desayuno/:nombre" element={<Desayuno />} />
          </Route>
          <Route path="/VistaMesero/Almuerzo" element={<Almuerzo />}>
            <Route path="/VistaMesero/Almuerzo/:nombre" element={<Almuerzo />} />
          </Route>
          <Route path="/VistaMesero/Notificaciones" element={<Notificaciones />}>
            <Route path="/VistaMesero/Notificaciones/:categorias" element={<Notificaciones />} />
          </Route>
        </Route>
        <Route path="/VistaCocina" element={<VistaCocina />}></Route>
      </Routes>
    </div>
  );
}

export default App;
