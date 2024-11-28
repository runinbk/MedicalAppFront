import React, { useEffect, useState } from "react";
import DoctorCard from "../DoctorCard/DoctorCard";
import "./DoctorsList.css";
import Search from "../../Search/Search";
import CreateDoctorModal from "../../Modals/CreateDoctorModal/CreateDoctorModal";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDoctores } from "../../../actions/doctor";

const DoctorsList = ({ getDoctores, doctor: { doctores, error, loading } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDoctorInfo, setIsDoctorInfo] = useState(null);
  const [activeTab, setActiveTab] = useState("doctors");

  useEffect(() => {
    getDoctores();
  }, [getDoctores]);

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
            onClick={() => {
              setIsModalOpen(true);
              setIsDoctorInfo(null);
            }}
          >
            Crear {activeTab === "doctors" ? "Doctor" : "Enfermero"}
          </button>
        </div>
        <div className="patient-grid">
          {activeTab === "doctors"
            ? doctores.map((doctor, index) => (
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
        type={activeTab}
      />
    </div>
  );
};

DoctorsList.propTypes = {
  getDoctores: PropTypes.func.isRequired,
  doctor: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  doctor: state.doctor,
});

export default connect(mapStateToProps, { getDoctores })(DoctorsList);
