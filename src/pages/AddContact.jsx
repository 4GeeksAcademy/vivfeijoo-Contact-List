import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    fetch("https://playground.4geeks.com/contact/agendas/vivfeijoo/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => {
        if (res.ok) navigate("/");
      })
      .catch(err => console.error("Error adding contact:", err));
  };

  return (
    <div className="container">
      <h2>Add a new contact</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" placeholder="Enter email" onChange={handleChange} required />
        <input name="phone" placeholder="Enter phone" onChange={handleChange} required />
        <input name="address" placeholder="Enter address" onChange={handleChange} required />
        <button type="submit" className="btn btn-primary mt-2">Save</button>
      </form>
      <a onClick={() => navigate("/")} className="d-block mt-2">or get back to contacts</a>
    </div>
  );
};

export default AddContact;

