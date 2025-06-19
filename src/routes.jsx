import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact"; // 👈 Asegúrate de importar esto

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit/:id" element={<EditContact />} /> {/* 👈 Esta es la nueva ruta */}
    </Routes>
  );
};

export default AppRoutes;

