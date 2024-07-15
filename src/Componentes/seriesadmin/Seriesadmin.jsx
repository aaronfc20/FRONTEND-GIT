
import { Link } from 'react-router-dom';


const Seriesadmin = () => {
  

  return (
    <>
      <div>
        <h3>Ordenes</h3>
        <ul>
          <Link to="/paneladmin"><li>Dashboard</li></Link>
          <Link to="/usuariosregister"><li>Usuarios registrados</li></Link>
          <Link to="/productosadmin"><li>Productos</li></Link>
          <Link to="/orders"><li>Ordenes</li></Link>
          <Link to="/productsell"><li>Productos más vendidos</li></Link>
          <Link to="/series"><li>Series</li></Link>
        </ul>
      </div>

      <div>
        <div>
            <div>
            <h3>Series</h3>
            <Link to="/mantenimientoserie"><button>Agregar serie</button></Link>
            </div>
            <input type="text" />
        </div>

        <div>
            <div>
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

            <div>
                <ul>
                    <li>ID</li>
                    <li>Nombre</li>
                    <li>Apellido</li>
                    <li>Correo</li>
                    <li>Fecha de registro</li>
                    <li>Estado</li>
                    <Link to="/detuserregister"><li>Ver / Desactivar</li></Link>
                </ul>
            </div>
          
        </div>

      </div>

      
    </>
  );
};

export default Seriesadmin;

/*
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Seriesadmin = ({ seriesData }) => {
  const [filteredSeries, setFilteredSeries] = useState(seriesData);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const results = seriesData.filter(serie =>
      serie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSeries(results);
  }, [searchTerm, seriesData]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div>
        <h3>Ordenes</h3>
        <ul>
          <Link to="/paneladmin"><li>Dashboard</li></Link>
          <Link to="/usuariosregister"><li>Usuarios registrados</li></Link>
          <Link to="/productosadmin"><li>Productos</li></Link>
          <Link to="/orders"><li>Ordenes</li></Link>
          <Link to="/productsell"><li>Productos más vendidos</li></Link>
          <Link to="/series"><li>Series</li></Link>
        </ul>
      </div>

      <div>
        <div>
          <div>
            <h3>Series</h3>
            <Link to="/mantenimientoserie"><button>Agregar serie</button></Link>
          </div>
          <input 
            type="text" 
            placeholder="Buscar series..." 
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div>
          <div>
            <ul>
              <li>ID</li>
              <li>Nombre</li>
              <li>Descripción</li>
              <li>Fecha de Creación</li>
              <li>Estado</li>
              <li>Acciones</li>
            </ul>
          </div>

          <div>
            {filteredSeries.map(serie => (
              <ul key={serie.id}>
                <li>{serie.id}</li>
                <li>{serie.name}</li>
                <li>{serie.description}</li>
                <li>{serie.creationDate}</li>
                <li>{serie.status}</li>
                <Link to={`/series/${serie.id}`}><li>Ver / Editar</li></Link>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Seriesadmin;
*/