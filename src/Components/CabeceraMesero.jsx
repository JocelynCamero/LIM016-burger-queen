import React from 'react';

export default function CabeceraMesero(props) {
  const { nombreMesero, fecha } = props;
  return (
    <div>
      <div>
        <h1>
          {nombreMesero}
        </h1>
        <h4>
          {fecha}
        </h4>
      </div>
      <div>
        <input />
      </div>
    </div>
  );
}
