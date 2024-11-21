import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profile-wrapper">
        <img
          src="/profile-placeholder.jpg"
          alt="Doctor profile"
          className="profile-image"
        />
        <div className="profile-info">
          <span className="doctor-name">Sylvia Johnston</span>
          <span className="doctor-title">Doctor</span>
        </div>
      </div>
      <button className="profile-dropdown">▼</button>
    </div>
  );
};

export default UserProfile;
