import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logoHamburguesa.svg';
import wave from '../wave.svg';
import '../ComponentLogin.scss';

export default function Login() {
  return (
    <div className="Login">
      <div className="div1">
        <img src={wave} alt="" className="wave" />
      </div>
      <div className="div2">
        <div className="LogoEmpresa">
          <img src={logo} alt="" className="LogoImg" />
        </div>
        <div className="Datos">
          <div className="Form">
            <i />
            <div className="Grupo">
              <p className="Texto">Correo</p>
              <input className="Input" placeholder="exaple@example.com" type="email" />
              <span className="MensajeError">Error</span>
            </div>
            <div className="Grupo">
              <p className="Texto">Contraseña</p>
              <input className="Input" placeholder="*************" type="password" />
              <span className="MensajeError">Error</span>
            </div>
            <button type="button" className="BtnLogin">
              <Link to="MenuMesero">Iniciar Sesion</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
