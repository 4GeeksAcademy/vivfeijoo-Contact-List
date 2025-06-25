import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const API_URL = "https://playground.4geeks.com/contact/agendas/vivfeijoo";

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`${API_URL}/contacts`);
        const data = await response.json();

        const contact = data.contacts.find(c => c.id === parseInt(id));
        if (!contact) throw new Error("Contact not found");

        setForm({
          full_name: contact.full_name || contact.name || "",
          email: contact.email || "",
          phone: contact.phone || "",
          address: contact.address || ""
        });

        setLoading(false);
      } catch (error) {
        console.error("Error loading contact:", error);
      }
    };

    fetchContact();
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/contacts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          full_name: form.full_name,
          name: form.full_name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          agenda_slug: "vivfeijoo"
        })
      });

      if (!response.ok) throw new Error("Failed to update contact");
      navigate("/");
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  if (loading) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit Contact</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
