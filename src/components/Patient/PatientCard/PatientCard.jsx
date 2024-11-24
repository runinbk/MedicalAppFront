import React from "react";
import "./PatientCard.css";
import { Link } from "react-router-dom";

const PatientCard = ({ patient }) => {
  return (
    <Link to="/patientprofile" className="patient-card">
      <div className="patient-header">
        <div>
          <h3>{patient.name}</h3>
          <span className="date-tag">{patient.date}</span>
        </div>
        <button className="edit-button">✏️</button>
      </div>
      <div className="patient-info">
        <div className="info-row">
          <span className="label">Grupo Sanguineo:</span>
          <span>{patient.bloodType}</span>
          <span className="label">CI:</span>
          <span>{patient.ci}</span>
        </div>
        <div className="info-row">
          <span className="label">Edad:</span>
          <span>{patient.age} anios</span>
        </div>
        <div className="info-row">
          <span className="label">Phone no:</span>
          <span>{patient.phone}</span>
        </div>
      </div>
    </Link>
  );
};

export default PatientCard;
