import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import MenuMesero from './Components/MenuMesero';
import MenuCocina from './Components/MenuCocina';
import Login from './Components/Login';
import Cafe from './Components/Cafe';
// import your route components too

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="MenuCocina" element={<MenuCocina />} />
        <Route path="MenuMesero" element={<MenuMesero />}>
          <Route path="Cafe" element={<Cafe />} />
        </Route>
      </Routes>
    </div>
  );
}
