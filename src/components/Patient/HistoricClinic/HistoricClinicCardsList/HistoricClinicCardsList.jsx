import React, { useState } from "react";
import "./HistoricClinicCardsList.css";
import HistoricClinicCard from "../HistoricClinicCard/HistoricClinicCard";
import AddExamModal from "../../../Modals/PatientAddExamModal/AddExamModal";

const HistoricClinicCardsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const examData = [
    {
      date: "07-08-2024",
      name: "Analisis de Sangre",
      doctor: "Jose Kennedy",
      codigo: "1253339746",
      hospital: "Jose Kennedy Hospital",
    },
    {
      date: "07-08-2024",
      name: "Analisis de Sangre",
      doctor: "Jose Kennedy",
      codigo: "1253339746",
      hospital: "Jose Kennedy Hospital",
    },
    {
      date: "07-08-2024",
      name: "Analisis de Sangre",
      doctor: "Jose Kennedy",
      codigo: "1253339746",
      hospital: "Jose Kennedy Hospital",
    },
  ];

  return (
    <>
      <AddExamModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="historic-clinic-section">
        <div className="exams-row">
          <div className="add-exam-card" onClick={() => setIsModalOpen(true)}>
            <div className="add-exam-content">
              <div className="add-icon">+</div>
              <span className="add-text">
                Agregar Examen a la Historia Clinica
              </span>
            </div>
          </div>

          {examData.map((exam, index) => (
            <HistoricClinicCard exam={exam} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HistoricClinicCardsList;
