import React from 'react';
import { Link } from 'react-router-dom';
import "./Prodadmin.css";

const Productadmin = () => {
  const users = [
    { id: 1, nombre: 'Nombre1', apellido: 'Apellido1', correo: 'correo1@example.com', fechaRegistro: '2023-01-01', estado: 'Activo' },
    { id: 2, nombre: 'Nombre2', apellido: 'Apellido2', correo: 'correo2@example.com', fechaRegistro: '2023-02-01', estado: 'Inactivo' },
    { id: 3, nombre: 'Nombre3', apellido: 'Apellido3', correo: 'correo3@example.com', fechaRegistro: '2023-03-01', estado: 'Activo' },
    { id: 4, nombre: 'Nombre4', apellido: 'Apellido4', correo: 'correo4@example.com', fechaRegistro: '2023-04-01', estado: 'Inactivo' },
  ];

  return (
    <>
      <div className="nav-container">
        <div className="nav-links-container">
          <h3>Admin</h3>
          <ul className="nav-links">
            <li><Link to="/paneladmin">Dashboard</Link></li>
            <li><Link to="/usuariosregister">Usuarios registrados</Link></li>
            <li><Link to="/productosadmin">Productos</Link></li>
            <li><Link to="/orders">Ordenes</Link></li>
            <li><Link to="/productsell">Productos más vendidos</Link></li>
            <li><Link to="/series">Series</Link></li>
          </ul>
        </div>

        <div className="user-form">
          <div className="form-section">
            <div className="section-title">
              <h3>Productos</h3>
              <Link to="/productadmin"><button className="add-button">+Agregar</button></Link>
            </div>
            <input type="text" className="search-input" placeholder="Buscar" />
          </div>

          <div className="user-list">
            <div className="list-header">
              <ul>
                <li>ID</li>
                <li>Nombre</li>
                <li>Apellido</li>
                <li>Correo</li>
                <li>Fecha de registro</li>
                <li>Estado</li>
                <li>Acciones</li>
              </ul>
            </div>
            {users.map(user => (
              <div className="list-item" key={user.id}>
                <ul>
                  <li>{user.id}</li>
                  <li>{user.nombre}</li>
                  <li>{user.apellido}</li>
                  <li>{user.correo}</li>
                  <li>{user.fechaRegistro}</li>
                  <li>{user.estado}</li>
                  <Link to="/detuserregister"><li>Ver / Desactivar</li></Link>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Productadmin;


/*

import React from 'react';
import { Link } from 'react-router-dom';
import './Prodadmin.css';

const Productadmin = ({ products }) => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-links-container">
          <h3>Admin</h3>
          <ul className="nav-links">
            <li><Link to="/paneladmin">Dashboard</Link></li>
            <li><Link to="/usuariosregister">Usuarios registrados</Link></li>
            <li><Link to="/productosadmin">Productos</Link></li>
            <li><Link to="/orders">Órdenes</Link></li>
            <li><Link to="/productsell">Productos más vendidos</Link></li>
            <li><Link to="/series">Series</Link></li>
          </ul>
        </div>

        <div className="user-form">
          <div className="form-section">
            <div className="section-title">
              <h3>Productos</h3>
              <Link to="/productadmin"><button className="add-button">+Agregar</button></Link>
            </div>
            <input type="text" className="search-input" placeholder="Buscar" />
          </div>

          <div className="user-list">
            <div className="list-header">
              <ul>
                <li>ID</li>
                <li>Nombre</li>
                <li>Precio</li>
                <li>Categoría</li>
                <li>Fecha de registro</li>
                <li>Estado</li>
                <li>Acciones</li>
              </ul>
            </div>
            {products.map(product => (
              <div className="list-item" key={product.id}>
                <ul>
                  <li>{product.id}</li>
                  <li>{product.nombre}</li>
                  <li>{product.precio}</li>
                  <li>{product.categoria}</li>
                  <li>{product.fechaRegistro}</li>
                  <li>{product.estado}</li>
                  <Link to={`/productadmin/${product.id}`}><li>Ver / Editar</li></Link>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Productadmin;
*/