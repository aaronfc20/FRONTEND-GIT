import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleClick = () => {
    const usuario = document.getElementById("input-username").value;
    const password = document.getElementById("input-password").value;
    if (usuario === "usuario" && password === "123") {
      navigate("/principalusuario");
    }
    if (usuario === "admin" && password === "12345") {
      navigate("/paneladmin");
    } else {
      setError("Email o contraseña incorrectos.");
    }
  };

  return (
    <main class="LoginForm">
      <div>
        <label class="LoginLabel">
          <b>Ingreso para clientes registrados</b>
        </label>
        <br />
        <br />
        <input
          class="LoginInput"
          id="input-username"
          type="text"
          placeholder="email"
        />
        <br />
        <input
          class="LoginInput"
          id="input-password"
          type="password"
          placeholder="password"
        />
        <br />
        <span>{error}</span>
        <br />
        <button class="LoginButton" type="submit" onClick={handleClick}>
          Ingresar
        </button>
        {!error && (
          <>
            <br />

            <Link to="/recuperacion">
              <u>Olvidé mi password</u>
            </Link>

            <br />
            <Link to="/register">
              <u>No tengo cuenta, deseo registrarme</u>
            </Link>
          </>
        )}
      </div>
    </main>
  );
};

export default Login;

/*

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if (username === "usuario" && password === "123") {
      navigate("/principalusuario");
    } else if (username === "admin" && password === "12345") {
      navigate("/paneladmin");
    } else {
      setError("Email o contraseña incorrectos.");
    }
  };

  return (
    <main className="LoginForm">
      <div>
        <label className="LoginLabel">
          <b>Ingreso para clientes registrados</b>
        </label>
        <br />
        <br />
        <form onSubmit={handleClick}>
          <input
            className="LoginInput"
            id="input-username"
            type="text"
            name="username"
            placeholder="Email"
            value={formData.username}
            onChange={handleChange}
          />
          <br />
          <input
            className="LoginInput"
            id="input-password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          {error && <span className="error-message">{error}</span>}
          <br />
          <button className="LoginButton" type="submit">
            Ingresar
          </button>
          <br />
          <Link to="/recuperacion">
            <u>Olvidé mi password</u>
          </Link>
          <br />
          <Link to="/register">
            <u>No tengo cuenta, deseo registrarme</u>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Login;

*/