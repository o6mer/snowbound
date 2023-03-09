import React from "react";
import Footer from "../../general/Footer";
import AdminNavBar from "./AdminNavBar";
import EditAddResort from "./EditAddResort";
import { useAuth } from "../../hooks/useAuth";

const EditPage = () => {
  useAuth();

  return (
    <>
      <AdminNavBar />
      <EditAddResort />
      <Footer />
    </>
  );
};

export default EditPage;
