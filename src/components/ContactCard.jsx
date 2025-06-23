import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ contact, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="contact-card">
      <div className="contact-image">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Contact Avatar"
        />
      </div>
      <div className="contact-details">
        <h2>{contact.full_name}</h2>
        <p><i className="fas fa-envelope"></i> {contact.email}</p>
        <p><i className="fas fa-phone"></i> {contact.phone}</p>
        <p><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
      </div>
      <div className="contact-actions">
        <i
          className="fas fa-pencil-alt"
          onClick={() => navigate(`/edit/${contact.id}`)}
        ></i>
        <i
          className="fas fa-trash"
          onClick={() => onDelete(contact.id)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
