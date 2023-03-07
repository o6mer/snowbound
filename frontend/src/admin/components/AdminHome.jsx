import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "../../home/Components/SearchBar";
import AdminResorts from "./AdminResorts";

const AdminHome = () => {
  // useEffect(() => {
  //   axios.post("http://localhost:5000/api/admin/getallresorts")
  //   .then((res) => {})
  //   .catch((err) => {})
  // }, [])

  const allResorts = ["jnjnjnjn", "Bangalore"];
  const [adminResorts, setAdminResorts] = useState([]);
  const [isToast, setIsToast] = useState(false);
  useEffect(() => {
    setAdminResorts(allResorts);
  }, []);

  const handleSearch = (e, resortName) => {
    console.log(resortName);
    const filterResort = allResorts.filter((res) => {
      return res === resortName;
    });
    if (resortName) {
      console.log(filterResort);
      setAdminResorts(filterResort);
      setIsToast(false);
    } else {
      setIsToast(true);
      setAdminResorts(allResorts);
    }
  };

  return (
    <>
      <h1>Admin Home</h1>
      <SearchBar handleSearch={handleSearch} isToast={isToast} />
      <AdminResorts adminResorts={adminResorts} />
    </>
  );
};

export default AdminHome;
