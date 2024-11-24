import React, { useState } from "react";
import DoctorCard from "../DoctorCard/DoctorCard";
import "./DoctorsList.css";
import Search from "../../Search/Search";
import CreateDoctorModal from "../../Modals/CreateDoctorModal/CreateDoctorModal";

const DoctorsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDoctorInfo, setIsDoctorInfo] = useState({});
  const [activeTab, setActiveTab] = useState("doctors");
  const doctors = [
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

  const nurses = [
    {
      name: "Maria Enfermera",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "1234567890",
      age: "25 anios",
      phone: "1234567890",
    },
    {
      name: "Maria Enfermera",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "1234567890",
      age: "25 anios",
      phone: "1234567890",
    },
    {
      name: "Maria Enfermera",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "1234567890",
      age: "25 anios",
      phone: "1234567890",
    },
    {
      name: "Maria Enfermera",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "1234567890",
      age: "25 anios",
      phone: "1234567890",
    },
    {
      name: "Maria Enfermera",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "1234567890",
      age: "25 anios",
      phone: "1234567890",
    },
    {
      name: "Maria Enfermera",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "1234567890",
      age: "25 anios",
      phone: "1234567890",
    },
    {
      name: "Maria Enfermera",
      date: "07-08-2024",
      bloodType: "ORH+",
      id: "1234567890",
      age: "25 anios",
      phone: "1234567890",
    },
  ];

  function handleOpenModal(doctor) {
    if (doctor) setIsDoctorInfo(doctor);
    console.log("abriendo");
    setIsModalOpen(true);
  }
  return (
    <div className="patient-container">
      <div className="page-title-container">
        <h1>Personal Medico</h1>
        <Search />
      </div>
      <div className="patient-list">
        <div className="patient-tabs">
          <div>
            <button
              className={`tab ${activeTab === "doctors" ? "active" : ""}`}
              onClick={() => setActiveTab("doctors")}
            >
              Doctores
            </button>
            <button
              className={`tab ${activeTab === "nurses" ? "active" : ""}`}
              onClick={() => setActiveTab("nurses")}
            >
              Enfermeros
            </button>
          </div>
          <button
            className="submit-button-paciente"
            onClick={() => setIsModalOpen(true)}
          >
            Crear {activeTab === "doctors" ? "Doctor" : "Enfermero"}
          </button>
        </div>
        <div className="patient-grid">
          {activeTab === "doctors"
            ? doctors.map((doctor, index) => (
                <DoctorCard
                  key={index}
                  doctor={doctor}
                  onClick={() => handleOpenModal(doctor)}
                />
              ))
            : nurses.map((nurse, index) => (
                <DoctorCard
                  key={index}
                  doctor={nurse}
                  onClick={() => handleOpenModal(nurse)}
                />
              ))}
        </div>
      </div>

      <CreateDoctorModal
        doctorInfo={isDoctorInfo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={activeTab} // Pass the active tab to the modal
      />
    </div>
  );
};

export default DoctorsList;
