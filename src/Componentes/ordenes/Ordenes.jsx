import { Link } from 'react-router-dom';
import './Ordenes.css';

const Ordenes = () => {
  return (
    <div class="contenedor">
      <div class="contenedor2">
        <h3>Admin</h3>
        <ul>
          <li><Link to="/paneladmin">Dashboard</Link></li>
          <li><Link to="/usuariosregister">Usuarios registrados</Link></li>
          <li><Link to="/productosadmin">Productos</Link></li>
          <li><Link to="/orders">Ordenes</Link></li>
          <li><Link to="/productsell">Productos más vendidos</Link></li>
          <li><Link to="/series">Series</Link></li>
        </ul>
      </div>
      
      <div class="contenido_principal">
        <div class="header">
          <h3 id='orden'>Órdenes</h3>
          <input type="text" id='busqueda' placeholder="Buscar por nombre o apellido de usuario o nro de orden..." />
        </div>
        
        <div class="contenedor_tabla">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Fecha de Orden</th>
                <th>Total</th>
                <th>Correo</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Juan Sánchez</td>
                <td>11/03/2023</td>
                <td>S/125.00</td>
                <td>altavista@123.com</td>
                <td>Entregado</td>
                <td><Link to="/detuserregister">Ver</Link></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Juan Sánchez</td>
                <td>11/03/2023</td>
                <td>S/125.00</td>
                <td>altavista@123.com</td>
                <td>Entregado</td>
                <td><Link to="/detuserregister">Ver</Link></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Juan Sánchez</td>
                <td>11/03/2023</td>
                <td>S/125.00</td>
                <td>altavista@123.com</td>
                <td>Entregado</td>
                <td><Link to="/detuserregister">Ver</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ordenes;

/*

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ordenApi from '../../api/orden'; // Asegúrate de que la ruta sea correcta
import './Ordenes.css';

const Ordenes = () => {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    const fetchOrdenes = async () => {
      const data = await ordenApi.findAll();
      setOrdenes(data);
    };

    fetchOrdenes();
  }, []);

  return (
    <div className="contenedor">
      <div className="contenedor2">
        <h3>Admin</h3>
        <ul>
          <li><Link to="/paneladmin">Dashboard</Link></li>
          <li><Link to="/usuariosregister">Usuarios registrados</Link></li>
          <li><Link to="/productosadmin">Productos</Link></li>
          <li><Link to="/orders">Ordenes</Link></li>
          <li><Link to="/productsell">Productos más vendidos</Link></li>
          <li><Link to="/series">Series</Link></li>
        </ul>
      </div>
      
      <div className="contenido_principal">
        <div className="header">
          <h3 id="orden">Órdenes</h3>
          <input type="text" id="busqueda" placeholder="Buscar por nombre o apellido de usuario o nro de orden..." />
        </div>
        
        <div className="contenedor_tabla">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Fecha de Orden</th>
                <th>Total</th>
                <th>Correo</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ordenes.map((orden) => (
                <tr key={orden.id}>
                  <td>{orden.id}</td>
                  <td>{orden.usuario}</td>
                  <td>{new Date(orden.fechaOrden).toLocaleDateString()}</td>
                  <td>{orden.total}</td>
                  <td>{orden.correo}</td>
                  <td>{orden.estado}</td>
                  <td><Link to={`/detuserregister/${orden.id}`}>Ver</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ordenes;

*/