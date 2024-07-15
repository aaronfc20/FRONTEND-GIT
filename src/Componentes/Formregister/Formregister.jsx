import React from "react";
import { Link } from "react-router-dom";
import "./Formregister.css";


const Formregister = () => {
 



  return (
    <>


<div class="FormDiv">
        <p>
          <label class="FormLabel">
            <b>Registra una nueva cuenta</b>
          </label>
        </p>
      </div>
      <div class="FormDiv">
        <form>
          <input class="FormInput" placeholder="Nombre" />
          <br />
          <input class="FormInput" placeholder="Apellido" />
          <br />
          <input class="FormInput" placeholder="Correo" />
          <br />
          <input class="FormInput" placeholder="Password" />
          <br />
          <input class="FormInput" placeholder="Confirmar Password " />
        </form>
      </div>

      <div class="FormDiv">
        <Link to="/login">
          <button class="FormButton">Crear nueva cuenta</button>
        </Link>
      </div>

        

        
        
        
    </>
  );
};

export default Formregister;

/*
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import usuarioApi from "../../api/usuario"; // Asegúrate de que la ruta sea correcta
import "./Formregister.css";

const Formregister = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const { nombre, apellido, correo, password, confirmPassword } = formData;
    if (!nombre || !apellido || !correo || !password || !confirmPassword) {
      toast.error("Por favor, complete todos los campos.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await usuarioApi.create(formData);
        toast.success("Cuenta creada con éxito!");
        navigate("/login");
      } catch (error) {
        toast.error("Hubo un error al crear la cuenta. Inténtelo de nuevo.");
      }
    }
  };

  return (
    <div className="form-container">
      <div className="FormDiv">
        <p>
          <label className="FormLabel">
            <b>Registra una nueva cuenta</b>
          </label>
        </p>
      </div>
      <div className="FormDiv">
        <form onSubmit={handleSubmit}>
          <input
            className="FormInput"
            placeholder="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <br />
          <input
            className="FormInput"
            placeholder="Apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
          <br />
          <input
            className="FormInput"
            placeholder="Correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
          <br />
          <input
            className="FormInput"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <input
            className="FormInput"
            type="password"
            placeholder="Confirmar Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <br />
          <button type="submit" className="FormButton">Crear nueva cuenta</button>
        </form>
      </div>
      <div className="FormDiv">
        <Link to="/login">
          <button className="FormButton">Ir a Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Formregister;

*/