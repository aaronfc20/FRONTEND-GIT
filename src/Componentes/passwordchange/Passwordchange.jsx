import React from 'react';
import { Link } from "react-router-dom";
import './Passwordchange.css';  

const Passwordchange = () => {
  return (
    <div className="contot">
      <div className="sidebar">
        <h3>Mi Cuenta</h3>
        <ul>
          <Link to="/principalusuario"><li>Órdenes Recientes</li></Link>
          <Link to="/datosregistro"><li>Datos de Registro</li></Link>
          <Link to="/passwordchange"><li>Cambiar Password</li></Link>
        </ul>
      </div>

      <div className="content">
        <h3><strong>Cambiar Password</strong></h3>
        <form className="form">
          <label>
            <input placeholder="Actual" type="password" />
          </label>
          <label>
            <input placeholder="Nuevo" type="password" />
          </label>
          <label>
            <input placeholder="Repetir" type="password" />
          </label>
          <button type="submit">Cambiar</button>
        </form>
      </div>
    </div>
  );
};

export default Passwordchange;

/*
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Passwordchange.css';  

const Passwordchange = ({ onChangePassword }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== repeatPassword) {
      setError('Las contraseñas nuevas no coinciden.');
      return;
    }

    if (onChangePassword) {
      onChangePassword(currentPassword, newPassword);
    }
  };

  return (
    <div className="contot">
      <div className="sidebar">
        <h3>Mi Cuenta</h3>
        <ul>
          <li><Link to="/principalusuario">Órdenes Recientes</li></Link>
          <li><Link to="/datosregistro">Datos de Registro</li></Link>
          <li><Link to="/passwordchange">Cambiar Password</li></Link>
        </ul>
      </div>

      <div className="content">
        <h3><strong>Cambiar Password</strong></h3>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            <input
              placeholder="Actual"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </label>
          <label>
            <input
              placeholder="Nuevo"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
          <label>
            <input
              placeholder="Repetir"
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </label>
          {error && <p className="error">{error}</p>}
          <button type="submit">Cambiar</button>
        </form>
      </div>
    </div>
  );
};

export default Passwordchange;
*/