import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Detailsuserregister.css';

const users = [
  { id: 1, nombre: 'Antonio López', correo: 'correo@sanchez.com', fechaRegistro: '12/02/2022' },
  { id: 12333, nombre: 'Ana Sanchez', correo: 'anita123@hotmail.com', fechaRegistro: '12/02/2022' },
  { id: 12334, nombre: 'Ana Sanchez', correo: 'anita123@hotmail.com', fechaRegistro: '12/02/2022' },
  { id: 2, nombre: 'Antonio López', correo: 'correo@sanchez.com', fechaRegistro: '12/02/2022' }
];

const Detailsuserregister = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleViewUser = (id) => {
    const user = users.find((user) => user.id === id);
    setSelectedUser(user);
  };

  return (
    <div class="detalles_contenedor">
      <div class="lista">
        <h3>Admin</h3>
        <ul>
          <Link to="/paneladmin"><li>Dashboard</li></Link>
          <Link to="/usuariosregister"><li>Usuarios registrados</li></Link>
          <Link to="/productosadmin"><li>Productos</li></Link>
          <Link to="/orders"><li>Ordenes</li></Link>
          <Link to="/productsell"><li>Productos más vendidos</li></Link>
          <Link to="/series"><li>Series</li></Link>
        </ul>
      </div>

      <div class="contenido">
        <div class="detalles_usuario">
          <h3><strong>Detalle de Usuario Registrado</strong></h3>
          {selectedUser ? (
            <div class="info_usuario">
              <div><strong>ID:</strong> {selectedUser.id}</div>
              <div><strong>Nombre:</strong> {selectedUser.nombre}</div>
              <div><strong>Correo:</strong> {selectedUser.correo}</div>
              <div><strong>Fecha de Registro:</strong> {selectedUser.fechaRegistro}</div>
            </div>
          ) : (
            <div>Seleccione un usuario para ver los detalles</div>
          )}
        </div>

        <div class="ordenes">
          <h3><strong>Órdenes Recientes (máximo 10)</strong></h3>
          <div class="contenedor_tabla">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Fecha de Orden</th>
                  <th>Total</th>
                  <th>Productos</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>11/02/2022</td>
                    <td>S/125.00</td>
                    <td>13</td>
                    <td>Pendiente</td>
                    <td><button onClick={() => handleViewUser(user.id)}>Ver</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailsuserregister;

/*
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usuarioApi from '../../api/usuario'; 
import './Detailsuserregister.css';

const Detailsuserregister = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const allUsers = await usuarioApi.findAll();
      setUsers(allUsers);
    };
    fetchUsers();
  }, []);

  const handleViewUser = async (id) => {
    const user = await usuarioApi.findOne(id);
    setSelectedUser(user);
  };

  return (
    <div className="detalles_contenedor">
      <div className="lista">
        <h3>Admin</h3>
        <ul>
          <Link to="/paneladmin"><li>Dashboard</li></Link>
          <Link to="/usuariosregister"><li>Usuarios registrados</li></Link>
          <Link to="/productosadmin"><li>Productos</li></Link>
          <Link to="/orders"><li>Ordenes</li></Link>
          <Link to="/productsell"><li>Productos más vendidos</li></Link>
          <Link to="/series"><li>Series</li></Link>
        </ul>
      </div>

      <div className="contenido">
        <div className="detalles_usuario">
          <h3><strong>Detalle de Usuario Registrado</strong></h3>
          {selectedUser ? (
            <div className="info_usuario">
              <div><strong>ID:</strong> {selectedUser.id}</div>
              <div><strong>Nombre:</strong> {selectedUser.nombre}</div>
              <div><strong>Correo:</strong> {selectedUser.correo}</div>
              <div><strong>Fecha de Registro:</strong> {selectedUser.fechaRegistro}</div>
            </div>
          ) : (
            <div>Seleccione un usuario para ver los detalles</div>
          )}
        </div>

        <div className="ordenes">
          <h3><strong>Órdenes Recientes (máximo 10)</strong></h3>
          <div className="contenedor_tabla">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Fecha de Orden</th>
                  <th>Total</th>
                  <th>Productos</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>11/02/2022</td>
                    <td>S/125.00</td>
                    <td>13</td>
                    <td>Pendiente</td>
                    <td><button onClick={() => handleViewUser(user.id)}>Ver</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailsuserregister;


*/