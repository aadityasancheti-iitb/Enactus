// src/components/TeamMember.js
import React from "react";
import "./TeamMember.css";

const TeamMember = ({ photo, name, title, intro }) => {
  return (
    <div className="col-md-4 d-flex justify-content-center mb-4">
      <div className="card team-member-card h-100 text-center">
        <div className="card-body">
          <img
            src={photo}
            className="rounded-circle team-member-photo mb-3"
            alt={name}
          />
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
          <p className="card-text">{intro}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
