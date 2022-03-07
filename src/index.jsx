import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Components/Login';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import MenuMesero from './Components/MenuMesero';
import MenuCocina from './Components/MenuCocina';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Login />
  </React.StrictMode>,
  document.getElementById('root'),
);

function Aplication() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="MenuMesero" element={<MenuMesero />} />
        <Route path="MenuCocina" element={<MenuCocina />} />
      </Routes>
    </div>
  );
}
export default Aplication;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
