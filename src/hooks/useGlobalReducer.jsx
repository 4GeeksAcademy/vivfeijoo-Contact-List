import React, { createContext, useEffect, useState } from "react";

const BASE_URL = "https://playground.4geeks.com/apis/agenda/";
const AGENDA = "vivifeijoo_agenda";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    try {
      const res = await fetch(`${BASE_URL}${AGENDA}/contacts`);
      const data = await res.json();
      console.log("📥 Contactos recibidos:", data);
      setContacts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("❌ Error al obtener contactos:", err);
    }
  };

  const addContact = async (contact) => {
    try {
      const res = await fetch(`${BASE_URL}${AGENDA}/contacts`, {
        method: "POST",
        body: JSON.stringify({ ...contact, agenda_slug: AGENDA }),
        headers: { "Content-Type": "application/json" }
      });
      const data = await res.json();
      console.log("✅ Contacto creado:", data);
      getContacts();
    } catch (err) {
      console.error("❌ Error al crear contacto:", err);
    }
  };

  const deleteContact = async (id) => {
    try {
      await fetch(`${BASE_URL}${AGENDA}/contacts/${id}`, {
        method: "DELETE"
      });
      getContacts();
    } catch (err) {
      console.error("❌ Error al eliminar contacto:", err);
    }
  };

  const updateContact = async (id, contact) => {
    try {
      await fetch(`${BASE_URL}${AGENDA}/contacts/${id}`, {
        method: "PUT",
        body: JSON.stringify({ ...contact, agenda_slug: AGENDA }),
        headers: { "Content-Type": "application/json" }
      });
      getContacts();
    } catch (err) {
      console.error("❌ Error al actualizar contacto:", err);
    }
  };

  
  const createAgenda = async () => {
    try {
      await fetch(`${BASE_URL}${AGENDA}`, { method: "POST" });
    } catch (err) {
      console.error("⚠️ La agenda ya existe o hubo un error.");
    }
  };

  useEffect(() => {
    createAgenda().then(getContacts);
  }, []);

  return (
    <Context.Provider value={{ contacts, addContact, deleteContact, updateContact }}>
      {children}
    </Context.Provider>
  );
};
