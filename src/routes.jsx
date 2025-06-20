import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
// Si ya tienes EditContact, también:
import EditContact from "./pages/EditContact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
};

export default AppRoutes;
