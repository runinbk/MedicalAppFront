import React, { useState } from "react";
import "./Card.css";

const LoginCard = ({ onSwitchMode }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", formData);
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

export default LoginCard;
