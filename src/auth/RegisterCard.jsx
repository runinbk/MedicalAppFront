import React, { useState } from "react";
import "./Card.css";

const RegisterCard = ({ onSwitchMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="auth-card">
      <h1>Bienvenido a Lorem</h1>
      <h2>Crear cuenta</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre completo</label>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre completo"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <div className="password-input-container">
            <input
              type="password"
              name="password"
              placeholder="Tu contraseña"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Confirmar contraseña</label>
          <div className="password-input-container">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirma tu contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Crear cuenta
        </button>

        <p className="switch-mode-text">
          ¿Ya tienes cuenta?
          <button
            type="button"
            className="switch-mode-button"
            onClick={onSwitchMode}
          >
            Inicia sesión
          </button>
        </p>
      </form>
    </div>
  );
};

export default RegisterCard;
