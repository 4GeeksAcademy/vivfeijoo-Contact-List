import React from "react";
import { useNavigate } from "react-router-dom";
import ContactCard from "../components/ContactCard";

const Home = () => {
  const navigate = useNavigate();

  const contacts = [
    {
      id: 1,
      full_name: "Mike Anamendolla",
      address: "5842 Hillcrest Rd",
      phone: "(870) 288-4149",
      email: "mike.ana@example.com"
    },
    {
      id: 2,
      full_name: "Mike Anamendolla",
      address: "5842 Hillcrest Rd",
      phone: "(870) 288-4149",
      email: "mike.ana@example.com"
    }
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Contact List</h2>
        <button onClick={() => navigate("/add")} className="btn btn-success">
          Add new contact
        </button>
      </div>
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Home;
