import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../general/Loader";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllResorts = async () => {
      setIsLoading(true);
      await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/resort/get`)
        .then((res) => {
          setAllResorts(res.data);
          //   console.log(allResorts, " hiii");
          setAdminResorts(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllResorts();
  }, []);

  const handleSearch = (e, resortName) => {
    const filterResort = allResorts.filter((res) => {
      return res.name === resortName;
    });
    if (resortName) {
      setAdminResorts(filterResort);
      setIsToast(false);
    } else {
      setIsToast(true);
      setAdminResorts(allResorts);
    }
  };
  const deleteResort = (resortName) => {
    axios
      .delete(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/api/resort/delete/${resortName}`
      )
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
      <SearchBar handleSearch={handleSearch} isToast={isToast} />
      <>
        {isLoading ? (
          <div className="h-[50vh]">
            <Loader />
          </div>
        ) : (
          <AdminResorts
            adminResorts={adminResorts}
            deleteResort={deleteResort}
          />
        )}
      </>
    </>
  );
};

export default AdminHome;
