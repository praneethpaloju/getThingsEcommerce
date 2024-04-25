import React from "react";
import "../Admin2/Admin2.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Addproducts from "../../Components/AddProducts/Addproducts.jsx";
import Listproducts from "../../Components/Listproducts/Listproducts.jsx";

const Admin2 = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<Addproducts />} />
        <Route path="/listproduct" element={<Listproducts />} />
      </Routes>
    </div>
  );
};

export default Admin2;
