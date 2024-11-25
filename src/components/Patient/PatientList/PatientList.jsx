import React, { useEffect, useState } from "react";
import PatientCard from "../PatientCard/PatientCard";
import "./PatientList.css";
import Search from "../../Search/Search";
import CreatePatientModal from "../../Modals/CreatePatientModal/CreatePatientModal";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPacientes } from "../../../actions/paciente";

const PatientList = ({
  getPacientes,
  paciente: { pacientes, error, loading },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getPacientes();
  }, [getPacientes]);

  console.log(pacientes);

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
          {pacientes.map((patient, index) => (
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

PatientList.propTypes = {
  getPacientes: PropTypes.func.isRequired,
  paciente: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  paciente: state.paciente,
});

export default connect(mapStateToProps, { getPacientes })(PatientList);
