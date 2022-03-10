import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../Firebase/firebaseAuth';
import { getUser } from '../Firebase/firebaseStore';
import logo from '../logoHamburguesa.svg';
import wave from '../wave.svg';
import '../Styles/ComponentLogin.scss';

export default function Login() {
  const navigate = useNavigate();
  const correoRef = useRef();
  const contraRef = useRef();

  const rolView = async () => {
    const correo = correoRef.current.value;
    const contraseña = contraRef.current.value;

<<<<<<< HEAD
    await signInWithEmailAndPassword(auth, correo, contraseña)
      .then((userCredential) => {
        console.log(userCredential);
        const docRefUsers = doc(db, 'usuarios', userCredential.user.uid);
        const docSnap = getDoc(docRefUsers).then((docc) => docc.data());
        docSnap.then((re) => {
          if (re.rol === 'mesero') navigate('/MenuMesero');
=======
    signIn(correo, contraseña)
      .then((userCredential) => {
        console.log('inicio sesion');
        getUser(userCredential.user.uid).then((docu) => {
          console.log(docu.data());
          if (docu.data().rol === 'mesero') navigate('/MenuMesero');
>>>>>>> 82f209768bb50829e1d2310df074400479ccdef4
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
            <button type="button" className="BtnLogin" onClick={rolView}>Iniciar Sesion</button>
          </div>
        </div>
      </div>
    </div>
  );
}
