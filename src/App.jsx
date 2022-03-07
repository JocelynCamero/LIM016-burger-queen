import React, { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {
  Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { db } from './firebase/firebaseConfig';

function App() {
  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getDocs(collection(db, 'usuarios'));
      datos.forEach((documento) => {
        console.log(documento.data());
      });
    };
    obtenerDatos();
  }, []);
  return (
    <h1>firebase</h1>
  );
}
export default App;
