import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams(); // ID del contacto
  const navigate = useNavigate();
  const AGENDA_SLUG = "vivfeijoo";
  const API_URL = `https://playground.4geeks.com/contact/agendas/${AGENDA_SLUG}/contacts/${id}`;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const [error, setError] = useState(null);

  // Cargar datos del contacto existente
  useEffect(() => {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error("Error al cargar el contacto");
        return res.json();
      })
      .then(data => {
        setForm({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          address: data.address || ""
        });
      })
      .catch(err => {
        console.error("Error:", err);
        setError("No se pudo cargar el contacto.");
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => {
        if (!res.ok) throw new Error("Error al actualizar el contacto");
        return res.json();
      })
      .then(() => {
        navigate("/");
      })
      .catch(err => {
        console.error("Error:", err);
        setError("No se pudo actualizar el contacto.");
      });
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          value={form.email}
          placeholder="Enter email"
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          value={form.phone}
          placeholder="Enter phone"
          onChange={handleChange}
          required
        />
        <input
          name="address"
          value={form.address}
          placeholder="Enter address"
          onChange={handleChange}
          required
        />
        <button type="submit">Save changes</button>
      </form>
      <a onClick={() => navigate("/")} className="back-link">
        or get back to contacts
      </a>
    </div>
  );
};

export default EditContact;
