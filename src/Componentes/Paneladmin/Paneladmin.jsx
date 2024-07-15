import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./paneladmin.css";

const Panelusario = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleButtonClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setShowCalendar(false); 
  };

  return (
    <>
    <section className='primflex'>
      <div className='barder'>
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

      <div>
        <div className='segunflex'>
          <h3>Dashboard</h3>
          
          <button onClick={handleButtonClick}>
            {showCalendar ? 'Cerrar calendario' : 'Cambiar Fecha o Periodo'}
          </button>
          {showCalendar && (
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              inline
            />
          )}
        </div>

        <div className='terflex'>
          <div>
            <h1>68</h1>
            <p>Ordenes del día de hoy</p>
          </div>

          <div>
            <h1>12</h1>
            <p>Usuarios</p>
          </div>

          <div>
            <h1>S/ 13,500.00</h1>
            <p>Ingresos de hoy</p>
          </div>
        </div>
      </div>
      </section>

      
    </>
  );
};

export default Panelusario;

/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './paneladmin.css';

const Panelusario = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleButtonClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setShowCalendar(false);
  };

  return (
    <section className="panel-admin">
      <div className="sidebar">
        <h3>Admin</h3>
        <ul>
          <li><Link to="/paneladmin">Dashboard</Link></li>
          <li><Link to="/usuariosregister">Usuarios registrados</Link></li>
          <li><Link to="/productosadmin">Productos</Link></li>
          <li><Link to="/orders">Órdenes</Link></li>
          <li><Link to="/productsell">Productos más vendidos</Link></li>
          <li><Link to="/series">Series</Link></li>
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <h3>Dashboard</h3>
          <button onClick={handleButtonClick} aria-expanded={showCalendar}>
            {showCalendar ? 'Cerrar calendario' : 'Cambiar Fecha o Periodo'}
          </button>
          {showCalendar && (
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              inline
            />
          )}
        </div>

        <div className="stats">
          <div className="stat-item">
            <h1>68</h1>
            <p>Órdenes del día de hoy</p>
          </div>

          <div className="stat-item">
            <h1>12</h1>
            <p>Usuarios</p>
          </div>

          <div className="stat-item">
            <h1>S/ 13,500.00</h1>
            <p>Ingresos de hoy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panelusario;

*/