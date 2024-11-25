import React, { useState } from "react";
import "./Card.css";
import PropTypes from "prop-types";

const LoginCard = ({ onSwitchMode, onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData.email, formData.password);
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
      <h2>Iniciar sesión</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Ingresa tu usuario o correo electrónico</label>
          <input
            type="text"
            name="email"
            placeholder="Usuario o correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Ingresa tu Contraseña</label>
          <div className="password-input-container">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <a href="/forgot-password" className="forgot-password">
          ¿Olvidaste tu contraseña?
        </a>

        <button type="submit" className="submit-button">
          Iniciar sesión
        </button>

        <p className="switch-mode-text">
          ¿No tienes cuenta?
          <button
            type="button"
            className="switch-mode-button"
            onClick={onSwitchMode}
          >
            Regístrate
          </button>
        </p>
      </form>
    </div>
  );
};

LoginCard.propTypes = {
  onSwitchMode: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginCard;
