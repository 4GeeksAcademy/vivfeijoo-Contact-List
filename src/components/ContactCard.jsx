import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, onDelete }) => {
  return (
    <div className="card mb-3 mx-auto" style={{ maxWidth: "600px" }}>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title mb-1">{contact.full_name}</h5>
          <p className="card-text mb-1">{contact.email}</p>
          <p className="card-text mb-1">{contact.phone}</p>
          <p className="card-text mb-0">{contact.address}</p>
        </div>
        <div>
          <Link to={`/edit/${contact.id}`}>
            <i className="fas fa-pencil-alt me-3 text-primary"></i>
          </Link>
          <i
            className="fas fa-trash text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => onDelete(contact.id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
