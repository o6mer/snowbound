import React from "react";
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";
import EditAddResort from "./components/EditAddResort";

const AdminPage = () => {
  return (
    <>
      <Navbar />
      <EditAddResort />
      <Footer />
    </>
  );
};

export default AdminPage;
