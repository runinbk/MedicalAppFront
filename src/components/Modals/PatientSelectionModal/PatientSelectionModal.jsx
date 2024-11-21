import React from "react";
import "./PatientSelectionModal.css";

const PatientSelectionModal = ({ isOpen, onClose, onSelectPatient }) => {
  if (!isOpen) return null;

  const patients = [
    { id: 1, name: "Marcelo Martinez", ci: "2180459" },
    { id: 2, name: "Marcelo Martinez", ci: "2180459" },
    { id: 3, name: "Marcelo Martinez", ci: "2180459" },
    { id: 4, name: "Marcelo Martinez", ci: "2180459" },
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Buscar Paciente</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-search">
          <div className="search-box-modal">
            <input type="text" placeholder="Buscar Paciente" />
          </div>
          <div className="recent-searches">
            <p className="recent-title">Busquedas recientes</p>
            <div className="patient-list-modal">
              {patients.map((patient) => (
                <div
                  key={patient.id}
                  className="patient-item"
                  onClick={() => onSelectPatient(patient)}
                >
                  <div className="patient-avatar">
                    <img src="/api/placeholder/32/32" alt={patient.name} />
                  </div>
                  <div className="patient-info">
                    <span className="patient-name">{patient.name}</span>
                    <span className="patient-ci">{patient.ci}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSelectionModal;
