import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Login from './Components/Login';
import ViewMesero from './Containers/ViewMesero';
// import your route components too

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="ViewMesero" element={<ViewMesero />} />
      </Routes>
    </div>
  );
}
