import React, { useState, useEffect } from 'react';
import '../estilos/CabeceraUsuario.scss';

function Hora() {
  const [hora, setHora] = useState(new Date().toLocaleString());
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(intervalo);
  });
  return (
    <div>
      <p className="texto">{hora}</p>
    </div>
  );
}

export default Hora;
