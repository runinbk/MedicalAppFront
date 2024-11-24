import React, { useState } from "react";
import "./Styles/AuthPage.css";
import LoginCard from "../auth/LoginCard";
import RegisterCard from "../auth/RegisterCard";

import docImage from "../assets/doctor.jpg";

const AuthPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className="auth-container">
      <div className="auth-icons">
        <div className="icon-auth clipboard-icon"></div>
        <div className="icon-auth lungs-icon"></div>
      </div>

      <div className="auth-content">
        {isLoginMode ? (
          <LoginCard onSwitchMode={toggleMode} />
        ) : (
          <RegisterCard onSwitchMode={toggleMode} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
