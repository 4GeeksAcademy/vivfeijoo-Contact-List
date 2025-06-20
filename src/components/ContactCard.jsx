import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ contact, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex align-items-center">
        <img
          src="https://via.placeholder.com/100"
          alt="profile"
          className="rounded-circle me-3"
        />
        <div className="flex-grow-1">
          <h5 className="card-title mb-1">{contact.name}</h5>
          <p className="card-text mb-1">
            <i className="fas fa-map-marker-alt me-2"></i>
            {contact.address}
          </p>
          <p className="card-text mb-1">
            <i className="fas fa-phone me-2"></i>
            {contact.phone}
          </p>
          <p className="card-text">
            <i className="fas fa-envelope me-2"></i>
            {contact.email}
          </p>
        </div>
        <div>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => navigate(`/edit/${contact.id}`)}
          >
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete(contact.id)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;



