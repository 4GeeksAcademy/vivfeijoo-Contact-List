import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      agenda_slug: "vivfeijoo"
    };

    console.log("Enviando contacto:", newContact);

    try {
      const response = await fetch("https://playground.4geeks.com/contact/agendas/vivfeijoo/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newContact)
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Contacto creado:", data);
        navigate("/");
      } else {
        console.error("Failed to add contact:", data);
        alert("Algo salió mal: " + JSON.stringify(data.detail));
      }
    } catch (error) {
      console.error("Error creando el contacto:", error);
      alert("Error de conexión");
    }
  };

  return (
    <div className="container mt-5 custom-container">
      <h2 className="mb-4 text-center">Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="form-control mb-3"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="form-control mb-3"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="form-control mb-3"
          value={form.address}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-success w-100">Save</button>
        
      </form>
    </div>
  );
};

export default AddContact;
