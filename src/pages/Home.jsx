import React, { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";
import { useNavigate } from "react-router-dom";

const API_URL = "https://playground.4geeks.com/contact/agendas/vivfeijoo/contacts";

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  fetch(API_URL)
    .then(res => {
      if (!res.ok) throw new Error("Error al cargar los contactos");
      return res.json();
    })
    .then(data => {
      setContacts(data.contacts || []);
    })
    .catch(err => {
      console.error("Error:", err);
      setError("Error al cargar los contactos");
    });
}, []);

  const deleteContact = (id) => {
    fetch(`${CONTACTS_URL}/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al eliminar el contacto");
        // Actualiza la lista localmente
        setContacts(prev => prev.filter(contact => contact.id !== id));
      })
      .catch((err) => {
        console.error(err);
        setError("No se pudo eliminar el contacto.");
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Contact List</h2>
        <button onClick={() => navigate("/add")} className="btn btn-success">
          Add new contact
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Verificamos que contacts sea un array antes de hacer map */}
      {Array.isArray(contacts) && contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onDelete={deleteContact} />
      ))}
    </div>
  );
};

export default Home;

