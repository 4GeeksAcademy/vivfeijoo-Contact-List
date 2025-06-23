import React, { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [contacts, setContacts] = useState([]);

  const API_URL = "https://playground.4geeks.com/contact/agendas/vivfeijoo";

  const getContacts = async () => {
    try {
      const response = await fetch(`${API_URL}/contacts`);
      const data = await response.json();
      setContacts(data.contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await fetch(`${API_URL}/contacts/${id}`, {
        method: "DELETE",
      });
      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="container mt-5 custom-container">
      <h1 className="text-center mb-4">Contact List</h1>
      <div className="text-end mb-3">
        <Link to="/add">
          <button className="btn btn-success custom-button">Add New Contact</button>
        </Link>
      </div>
      <div className="list-group">
        {contacts.length === 0 ? (
          <p className="text-center">No contacts available.</p>
        ) : (
          contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onDelete={deleteContact}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
