import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Userregister.css";

const inicialUsers = [
  { id: 1, nombre: 'Antonio', apellido: 'Lopez Caro', correo: 'correo@sanchez.com', fechaRegistro: '11/02/2022', estado: 'Activo' },
  { id: 12333, nombre: 'Ana', apellido: 'Sanchez', correo: 'anita123@hotmail.com', fechaRegistro: '11/02/2022', estado: 'Inactivo' },
  { id: 12334, nombre: 'Ana', apellido: 'Sanchez', correo: 'anita123@hotmail.com', fechaRegistro: '11/02/2022', estado: 'Inactivo' },
  { id: 2, nombre: 'Antonio', apellido: 'Lopez Caro', correo: 'correo@sanchez.com', fechaRegistro: '11/02/2022', estado: 'Activo' },
];

const Userregister = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState(inicialUsers);

  const activar_desactivar = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, estado: user.estado === 'Activo' ? 'Inactivo' : 'Activo' } : user
    ));
  };

  return (
    <div className="continee">
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

      <div className="main">
        <div className="header">
          <h3 id='user_register'>Usuarios registrados</h3>
          <input id='busqueda'
            type="text" 
            placeholder='Buscar por correo, nombre o apellidos'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Fecha de registro</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.filter(user => 
              user.nombre.toLowerCase().includes(search.toLowerCase()) ||
              user.apellido.toLowerCase().includes(search.toLowerCase()) ||
              user.correo.toLowerCase().includes(search.toLowerCase())
            ).map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.correo}</td>
                <td>{user.fechaRegistro}</td>
                <td>{user.estado}</td>
                <td>
                  <Link to="/detuserregister">Ver</Link> / 
                  <button onClick={() => activar_desactivar(user.id)}>
                    {user.estado === 'Activo' ? 'Desactivar' : 'Activar'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userregister;
