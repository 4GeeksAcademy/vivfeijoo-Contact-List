import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ contact, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="card mb-3 p-3 d-flex flex-row align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="contact"
          className="rounded-circle me-3"
          width="80"
          height="80"
        />
        <div>
          <h5 className="mb-1">{contact.full_name || contact.name}</h5>
          <p className="mb-1">
            <i className="fas fa-map-marker-alt me-2"></i>
            {contact.address}
          </p>
          <p className="mb-1">
            <i className="fas fa-phone me-2"></i>
            {contact.phone}
          </p>
          <p className="mb-0">
            <i className="fas fa-envelope me-2"></i>
            {contact.email}
          </p>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center gap-3 contact-actions">
        <i
          className="fas fa-pencil-alt mb-2 text-primary"
          role="button"
          onClick={() => navigate(`/edit/${contact.id}`)}
        ></i>
        <i
          className="fas fa-trash text-danger"
          role="button"
          onClick={() => onDelete(contact.id)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;

