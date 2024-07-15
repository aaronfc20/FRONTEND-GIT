import React from 'react';
import { Link } from 'react-router-dom';
import './Productadmin.css';

const Productadmin = () => {
  return (
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
      <div className="form-container">
        <h3><strong>Detalle de usuario registrado</strong></h3>
        <div className="form-group">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Descripción" />
          <input type="text" placeholder="Caracteristicas" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Marca" />
          <input type="text" placeholder="Serie" />
          <p>S/</p>
          <input type="text" placeholder="Precio" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Tipo" />
          <input type="text" placeholder="Stock" />
        </div>
        <div className="form-group">
          <button>Agregar imagen</button>
          <button>Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default Productadmin;

/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Productadmin.css';

const Productadmin = ({ onSaveProduct }) => {
  const [product, setProduct] = useState({
    nombre: '',
    descripcion: '',
    caracteristicas: '',
    marca: '',
    serie: '',
    precio: '',
    tipo: '',
    stock: '',
    imagen: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSave = () => {
    if (onSaveProduct) {
      onSaveProduct(product);
    }
  };

  const handleImageUpload = (e) => {
    // Aquí podrías agregar la lógica para manejar la carga de imágenes
  };

  return (
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
      <div className="form-container">
        <h3><strong>Detalle de Producto</strong></h3>
        <div className="form-group">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={product.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            name="descripcion"
            placeholder="Descripción"
            value={product.descripcion}
            onChange={handleChange}
          />
          <input
            type="text"
            name="caracteristicas"
            placeholder="Caracteristicas"
            value={product.caracteristicas}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="marca"
            placeholder="Marca"
            value={product.marca}
            onChange={handleChange}
          />
          <input
            type="text"
            name="serie"
            placeholder="Serie"
            value={product.serie}
            onChange={handleChange}
          />
          <div className="input-group">
            <span>S/</span>
            <input
              type="text"
              name="precio"
              placeholder="Precio"
              value={product.precio}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="tipo"
            placeholder="Tipo"
            value={product.tipo}
            onChange={handleChange}
          />
          <input
            type="text"
            name="stock"
            placeholder="Stock"
            value={product.stock}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button onClick={handleImageUpload}>Agregar imagen</button>
          <button onClick={handleSave}>Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default Productadmin;
*/