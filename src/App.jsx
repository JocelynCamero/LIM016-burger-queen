import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import MenuMesero from './Components/MenuMesero';
import MenuCocina from './Components/MenuCocina';
import Login from './Components/Login';
// import your route components too

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="MenuCocina" element={<MenuCocina />} />
        <Route path="MenuMesero" element={<MenuMesero />} />
      </Routes>
    </div>
  );
}
