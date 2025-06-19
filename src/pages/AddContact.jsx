import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://playground.4geeks.com/contact/agendas/vivfeijoo/contacts";

const AddContact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        alert("Error al guardar el contacto.");
      });
  };

  return (
    <div className="container">
      <h2>Add a new contact</h2>
      <form onSubmit={handleSubmit} className="add-contact-form">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
      <a onClick={() => navigate("/")} className="back-link">
        or get back to contacts
      </a>
    </div>
  );
};

export default AddContact;
