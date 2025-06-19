import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactCard from "../components/ContactCard";

const API_URL = "https://playground.4geeks.com/contact/agendas/vivfeijoo/contacts";

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setContacts(data.contacts);
      })
      .catch(() => {
        setError("No se pudieron cargar los contactos.");
      });
  }, []);

  const deleteContact = id => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (!res.ok) throw new Error();
        setContacts(prev => prev.filter(contact => contact.id !== id));
      })
      .catch(() => {
        setError("No se pudo eliminar el contacto.");
      });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Contact List</h2>
        <button onClick={() => navigate("/add")} className="btn btn-success">
          Add new contact
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} onDelete={deleteContact} />
      ))}
    </div>
  );
};

export default Home;


