import React from 'react';
import {
  Routes,
  Route,
  useParams,
  Link,
} from 'react-router-dom';
import MenuMesero from './Components/MenuMesero';
import MenuCocina from './Components/MenuCocina';
import Login from './Components/Login';
import Cafe from './Components/Cafe';
// import your route components too

const Desayuno =():  =>{
    const {desayuno}= useParams()
    return(
 
      <div>
      <h1>Desayunos</h1>
      {desayuno}
      <Link to="details">ir a los detalles del link</Link>
      </div>
    );
}

const DesayunoDetails =(): Element =>{
  const {desayuno}= useParams()
  return(

    <div>
    <h1>Desayunos   {desayuno}</h1>
    
    <Link to="details">ir a los detalles del link</Link>
    </div>
  );
}



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="MenuCocina" element={<MenuCocina />} />
        <Route path="MenuMesero" element={<MenuMesero />}>
          <Route path="MenuMesero" element={<Cafe />} />
        </Route>
      </Routes>
    </div>
  );
}
