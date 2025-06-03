import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function AddContact() {
  const { dispatch, store } = useGlobalReducer();
  const navigate = useNavigate();
  const { id } = useParams();

  const editing = Boolean(id);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    if (editing) {
      const contactToEdit = store.contacts.find(c => c.id === parseInt(id));
      if (contactToEdit) {
        setFormData({
          full_name: contactToEdit.full_name,
          email: contactToEdit.email,
          phone: contactToEdit.phone,
          address: contactToEdit.address
        });
      }
    }
  }, [editing, id, store.contacts]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const apiUrl = editing
      ? `https://playground.4geeks.com/apis/fake/contact/${id}`
      : `https://playground.4geeks.com/apis/fake/contact/`;

    const method = editing ? "PUT" : "POST";

    const bodyData = {
      ...formData,
      agenda_slug: "vivifeijoo" // ⚠️ cámbialo si tu agenda_slug es otro
    };

    fetch(apiUrl, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyData)
    })
      .then(res => res.json())
      .then(data => {
        if (editing) {
          dispatch({ type: "UPDATE_CONTACT", payload: data });
        } else {
          dispatch({ type: "ADD_CONTACT", payload: data });
        }
        navigate("/"); // vuelve a la vista de contactos
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>{editing ? "Editar Contacto" : "Agregar Nuevo Contacto"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Nombre Completo"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Teléfono"
          required
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Dirección"
          required
        />
        <button type="submit">{editing ? "Actualizar" : "Crear"}</button>
      </form>
    </div>
  );
}
