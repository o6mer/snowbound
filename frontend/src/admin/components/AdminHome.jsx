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
  //   let allResorts = []
  const [allResorts, setAllResorts] = useState([]);
  const [adminResorts, setAdminResorts] = useState([]);
  const [isToast, setIsToast] = useState(false);

  useEffect(() => {
    const getAllResorts = async () => {
      await axios
        .get("http://localhost:8000/api/resort/get")
        .then((res) => {
          console.log(res.data);
          setAllResorts(res.data);
          //   console.log(allResorts, " hiii");
          setAdminResorts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllResorts();
  }, []);

  const handleSearch = (e, resortName) => {
    console.log(resortName);
    console.log(allResorts);
    const filterResort = allResorts.filter((res) => {
      return res.name === resortName;
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
  const deleteResort = (resortName) => {
    axios
      .delete(`http://localhost:8000/api/resort/${resortName}`)
      .then((res) => {
        alert("deleted");
        console.log(res);
        const temp = allResorts.filter((res) => res.name !== resortName);
        setAllResorts(temp);
        setAdminResorts(temp);
      })
      .catch((err) => {
        console.log(err);
      });
    // alert(resortName);
  };
  return (
    <>
      <h1>Admin Home</h1>
      <SearchBar handleSearch={handleSearch} isToast={isToast} />
      <AdminResorts adminResorts={adminResorts} deleteResort={deleteResort} />
    </>
  );
};

export default AdminHome;
