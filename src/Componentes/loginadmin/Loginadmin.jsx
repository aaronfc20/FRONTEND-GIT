
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Loginadmin = () => {
  const navigate = useNavigate();
  

  const [error, setError] = useState('');

  const handleClick = () => {
    const usuario =document.getElementById("input-username").value
    const password =document.getElementById("input-password").value
    if (usuario === 'admin' && password === '123') {
      navigate('/principaladmin');
    } else {
      setError("Email o contraseña incorrectos.");
    }
  };

  return (
    <main >
      <label>Email: </label>
      <br/>
      <input id="input-username" type="text" placeholder='Email' />
      <br />
      <label>Password: </label>
      <br />
      <input id="input-password" type="password" placeholder='password' />
      <br />
      <span >{error}</span>
      <br />
      <button type="submit" onClick={handleClick}>Login</button>
      


    </main>
  );
};

export default Loginadmin;

/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginadmin.css'; // Asegúrate de que este archivo existe para estilos personalizados

const Loginadmin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if (username === 'admin' && password === '123') {
      navigate('/principaladmin');
    } else {
      setError("Email o contraseña incorrectos.");
    }
  };

  return (
    <main className="login-admin-form">
      <form onSubmit={handleClick}>
        <div>
          <label htmlFor="input-username">Email: </label>
          <br />
          <input
            id="input-username"
            name="username"
            type="text"
            placeholder="Email"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="input-password">Password: </label>
          <br />
          <input
            id="input-password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {error && (
          <div className="error-message">
            <span>{error}</span>
          </div>
        )}
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Loginadmin;

*/