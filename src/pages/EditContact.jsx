import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditContact = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: ""
  });

  // Cargar datos del contacto al iniciar
  useEffect(() => {
    fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`)
      .then(res => res.json())
      .then(data => {
        setForm({
          full_name: data.full_name,
          email: data.email,
          phone: data.phone,
          address: data.address
        });
      })
      .catch(error => console.error("❌ Error al cargar contacto:", error));
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const updatedContact = {
      ...form,
      agenda_slug: "vivifeijoo_agenda"
    };

    fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedContact)
    })
      .then(res => res.json())
      .then(data => {
        console.log("✔ Contacto actualizado:", data);
        navigate("/");
      })
      .catch(error => console.error("❌ Error al actualizar:", error));
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="full_name"
          value={form.full_name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter phone"
          required
        />
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Enter address"
          required
        />
        <button type="submit">save</button>
      </form>
      <a onClick={() => navigate("/")} className="back-link">
        or get back to contacts
      </a>
    </div>
  );
};

export default EditContact;

