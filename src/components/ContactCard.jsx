import React from "react";
import { useNavigate } from "react-router-dom";
const ContactCard = ({ contact, deleteContact }) => {
  const navigate = useNavigate();
  return (
    <div className="contact-card">
      <img  
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="profile"
        className="contact-image"
      />
      <div className="contact-info">
        <h5>{contact.full_name}</h5>
        <p><i className="fas fa-envelope"></i> {contact.email}</p>
        <p><i className="fas fa-phone"></i> {contact.phone}</p>
        <p><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
      </div>
      <div className="action-buttons">
        <button onClick={() => navigate(`/edit/${contact.id}`)}>
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button onClick={() => deleteContact(contact.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};
export default ContactCard;
