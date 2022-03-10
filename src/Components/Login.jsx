import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  auth, signInWithEmailAndPassword, doc, getDoc, db,
} from '../Firebase/firebaseConfig';
import logo from '../logoHamburguesa.svg';
import wave from '../wave.svg';
import '../Styles/ComponentLogin.scss';

export default function Login() {
  const navigate = useNavigate();
  const correoRef = useRef();
  const contraRef = useRef();

  const rolView = () => {
    const correo = correoRef.current.value;
    const contraseña = contraRef.current.value;

    signInWithEmailAndPassword(auth, correo, contraseña)
      .then((userCredential) => {
        const { user } = userCredential;

        const docRefUsers = doc(db, 'usuarios', user.uid);
        const docSnap = getDoc(docRefUsers).then((docc) => docc.data());
        docSnap.then((re) => {
          if (re.rol === 'mesero') navigate('/MenuMesero');
          else navigate('/MenuCocina');
        });
      })
      .catch((e) => console.log('Hubo un error en la authenticacion', e));
  };

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
              <input className="Input" ref={correoRef} placeholder="exaple@example.com" type="email" />
              <span className="MensajeError">Error</span>
            </div>
            <div className="Grupo">
              <p className="Texto">Contraseña</p>
              <input className="Input" ref={contraRef} placeholder="*************" type="password" />
              <span className="MensajeError">Error</span>
            </div>
            <button type="button" onClick={rolView} className="BtnLogin">Iniciar Sesion</button>
          </div>
        </div>
      </div>
    </div>
  );
}
