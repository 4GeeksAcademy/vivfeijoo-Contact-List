import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Contacto creado:", form);
    navigate("/");
  };

  return (
    <div>
      <h2>Add a new contact</h2>
      <form onSubmit={handleSubmit}>
        <input name="full_name" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" placeholder="Enter email" onChange={handleChange} required />
        <input name="phone" placeholder="Enter phone" onChange={handleChange} required />
        <input name="address" placeholder="Enter address" onChange={handleChange} required />
        <button type="submit">save</button>
      </form>
      <a onClick={() => navigate("/")} className="back-link">
        or get back to contacts
      </a>
    </div>
  );
};

export default AddContact;

