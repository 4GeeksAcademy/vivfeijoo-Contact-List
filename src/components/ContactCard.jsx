import React from "react";

const ContactCard = ({ contact, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      onDelete(contact.id);
    }
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="rounded-circle me-3"
            width="80"
            height="80"
          />
          <div>
            <h5 className="card-title mb-1">{contact.name}</h5>
            <p className="mb-1">
              <i className="fas fa-envelope me-2"></i>{contact.email}
            </p>
            <p className="mb-1">
              <i className="fas fa-phone me-2"></i>{contact.phone}
            </p>
            <p className="mb-0">
              <i className="fas fa-map-marker-alt me-2"></i>{contact.address}
            </p>
          </div>
        </div>
        <div>
          <button
            className="btn btn-link text-danger fs-5"
            onClick={handleDelete}
            title="Delete"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
