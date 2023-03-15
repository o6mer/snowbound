import React from "react";
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";
import EditAddResort from "./components/EditAddResort";
import AdminHome from "./components/AdminHome";
import AdminNavBar from "./components/AdminNavBar";
import { useAuth } from "../hooks/useAuth";


const AdminPage = () => {
  useAuth();
  return (
    <>
      <AdminNavBar />
      <AdminHome />
      {/* <EditAddResort /> */}
      <Footer />
    </>
  );
};

export default AdminPage;
