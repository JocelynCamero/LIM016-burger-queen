import React, { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../contextos/AppContext';
import { iniciarSesion } from '../firebase/firebaseAuth';
import { obtenerUsuario } from '../firebase/firebaseStore';
import logo from '../imagenes/logoHamburguesa.svg';
import '../estilos/InicioSesion.scss';

export default function InicioSesion() {
  const { obtenerNombreMesero } = useContext(AppContext);

  const navigate = useNavigate();
  const correoRef = useRef();
  const contraRef = useRef();

  const validarRol = async () => {
    const correo = correoRef.current.value;
    const contraseña = contraRef.current.value;

    iniciarSesion(correo, contraseña)
      .then((credencialUsuario) => {
        console.log('inicio sesion');
        obtenerUsuario(credencialUsuario.user.uid).then((docu) => {
          obtenerNombreMesero(docu.nombre);
          console.log(docu.rol);
          if (docu.rol === 'Mesero') navigate('/VistaMesero/Desayuno');
          else navigate('/Pedidos');
        });
      })
      .catch((e) => console.log('Hubo un error en la authenticacion', e));
  };

  return (
    <div className="InicioSesion">
      <div className="ContenedorLogo">
        <img src={logo} alt="" className="LogoImg" />
      </div>
      <div className="Datos">
        <form className="Form">
          <FontAwesomeIcon className="IconoUsuario" icon={faUserCircle} size="8x" color="#252836" />
          <div className="Grupo">
            <p className="Texto">Correo</p>
            <input className="Input" ref={correoRef} placeholder="example@example.com" type="email" />
          </div>
          <div className="Grupo">
            <p className="Texto">Contraseña</p>
            <input className="Input" ref={contraRef} placeholder="*************" type="password" />
          </div>
          <button type="button" className="BtnInciarSesion" onClick={validarRol}>Iniciar Sesion</button>
        </form>
      </div>
    </div>
  );
}
