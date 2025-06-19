import React from "react";

const ContactCard = ({ contact, onDelete }) => {
  return (
    <div className="contact-card">
      <img
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="User"
      />
      <div className="contact-info">
        <h5>{contact.name}</h5>
        <p><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
        <p><i className="fas fa-phone"></i> {contact.phone}</p>
        <p><i className="fas fa-envelope"></i> {contact.email}</p>
      </div>
      <div className="contact-actions">
        <i className="fas fa-pencil-alt"></i>
        <i className="fas fa-trash" onClick={() => onDelete(contact.id)}></i>
      </div>
    </div>
  );
};

export default ContactCard;

