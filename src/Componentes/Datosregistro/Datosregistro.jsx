import React from 'react';
import { Link } from "react-router-dom";
import './Datosregistro.css';  // Importamos el archivo CSS

const Datosregistro = () => {
  return (
    <div className="contine">
      <div className="sidebar">
        <h3>Mi Cuenta</h3>
        <ul>
          <Link to="/principalusuario"><li>Órdenes Recientes</li></Link>
          <Link to="/datosregistro"><li>Datos de Registro</li></Link>
          <Link to="/passwordchange"><li>Cambiar Password</li></Link>
        </ul>
      </div>
      
      <div className="content">
        <h3><strong>Datos de Registro</strong></h3>
        <form className="form">
          <label>
            <input placeholder="Nombre" type="text" />
          </label>
          <label>
            <input placeholder="Apellido" type="text" />
          </label>
          <label>
            <input placeholder="Correo" type="email" />
          </label>
          <button type="submit">Actualizar</button>
        </form>
      </div>
    </div>
  );
};

export default Datosregistro;
