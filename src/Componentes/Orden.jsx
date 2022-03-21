import React from 'react';

export default function Orden(props) {
  const { nombreMesero, fecha ,numeroOrden } = props;
  return (
    <div className="Orden">
      <div>
        <h1>
          {numeroOrden}
        </h1>
        <h1>
          {nombreMesero}
        </h1>
        <h4>
          {fecha}
        </h4>
      </div>
      <div>
        <input className="NombreCliente" placeholder="Nombre del cliente" />
      </div>
      <div>
        <input className="N° de pedido" placeholder="Numero de mesa" />
      </div>
    </div>
  );
}
