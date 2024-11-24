import React, { useState } from "react";
import PatientCard from "../PatientCard/PatientCard";
import "./PatientList.css";
import Search from "../../Search/Search";
import CreatePatientModal from "../../Modals/CreatePatientModal/CreatePatientModal";

const PatientList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const patients = [
    {
      name: "Beatriz Morales",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "9876543210",
      age: "28 anios",
      phone: "9876543210",
    },
    {
      name: "Beatriz Morales",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "9876543210",
      age: "28 anios",
      phone: "9876543210",
    },
    {
      name: "Beatriz Morales",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "9876543210",
      age: "28 anios",
      phone: "9876543210",
    },
    {
      name: "Beatriz Morales",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "9876543210",
      age: "28 anios",
      phone: "9876543210",
    },
    {
      name: "Beatriz Morales",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "9876543210",
      age: "28 anios",
      phone: "9876543210",
    },
    {
      name: "Beatriz Morales",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "9876543210",
      age: "28 anios",
      phone: "9876543210",
    },
    {
      name: "Beatriz Morales",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "9876543210",
      age: "28 anios",
      phone: "9876543210",
    },
    {
      name: "Beatriz Morales",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "9876543210",
      age: "28 anios",
      phone: "9876543210",
    },
    {
      name: "Beatriz Morales",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "9876543210",
      age: "28 anios",
      phone: "9876543210",
    },
  ];
  return (
    <div className="patient-container">
      <div className="page-title-container">
        <h1>Pacientes</h1>
        <Search />
      </div>
      <div className="patient-list">
        <div className="patient-tabs">
          <button className="tab active">Pacientes</button>
          <button
            className="submit-button-paciente"
            onClick={() => setIsModalOpen(true)}
          >
            Crear Paciente
          </button>
        </div>
        <div className="patient-grid">
          {patients.map((patient, index) => (
            <PatientCard key={index} patient={patient} />
          ))}
        </div>
      </div>

      <CreatePatientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default PatientList;
