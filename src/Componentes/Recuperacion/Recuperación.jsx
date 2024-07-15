import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Recuperación.css";

const Recuperacion = () => {
  return (
    <main>
      <form class="RecupForm">
        <div>
          <label class="RecupLabel">
            <b>Ingrese su correo para enviar contraseña</b>
          </label>
          <br />
          <br />

          <input class="RecupInput" type="text" placeholder="email" />
          <br />

          <button class="RecupButton" type="submit">
            Enviar
          </button>
          <br />

          <Link to="/login">
            <label>
              <u>Regresar al login</u>
            </label>
          </Link>
          <br />
        </div>
      </form>
    </main>
  );
};

export default Recuperacion;

/*
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Recuperación.css";

const Recuperacion = ({ onRecoverPassword }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      setError('Por favor, ingrese su correo electrónico.');
      return;
    }

    if (onRecoverPassword) {
      onRecoverPassword(email)
        .then(response => {
          setMessage('Correo de recuperación enviado. Por favor, revise su bandeja de entrada.');
          setError('');
        })
        .catch(err => {
          setError('Error al enviar el correo de recuperación. Por favor, inténtelo de nuevo.');
          setMessage('');
        });
    }
  };

  return (
    <main>
      <form className="RecupForm" onSubmit={handleSubmit}>
        <div>
          <label className="RecupLabel">
            <b>Ingrese su correo para enviar contraseña</b>
          </label>
          <br />
          <br />
          <input
            className="RecupInput"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}
          <button className="RecupButton" type="submit">
            Enviar
          </button>
          <br />
          <Link to="/login">
            <label>
              <u>Regresar al login</u>
            </label>
          </Link>
          <br />
        </div>
      </form>
    </main>
  );
};

export default Recuperacion;

*/