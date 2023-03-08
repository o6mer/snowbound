import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, ListItemButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import AdminDeleteModal from "./AdminDeleteModal";
const AdminResorts = ({ adminResorts, deleteResort }) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteResortName, setDeleteResortName] = useState("");
  // const deleteResort = (resortName) => {
  //   axios
  //     .delete(`http://localhost:8000/api/resort/${resortName}`)
  //     .then((res) => {
  //       alert("deleted");
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // alert(resortName);
  // };
  return (
    <>
      <div className=" flex flex-col gap-5 py-10">
        {adminResorts.map((resort, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-end gap-10 border p-2 mx-[5vw] rounded-lg shadow-sm"
            >
              <div>
                <span className="text-lg font-semibold">{resort.name}</span>
                <p className="text-gray-500 overflow-hidden line-clamp-2">
                  <span className="text-black">{resort.country_id}</span>
                  {` — ${resort.description}`}
                </p>
              </div>

              <div className="flex flex-col gap-2 ">
                {/* <NavLink to="/admin/edit&addresort" state={{ resort: resort }}> */}
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<EditIcon />}
                  onClick={() =>
                    navigate(`/admin/edit&addresort/${resort.name}`)
                  }
                >
                  Edit
                </Button>
                {/* </NavLink> */}
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    setDeleteResortName(resort.name);
                    setModalOpen(true);
                    //  deleteResort(resort.name)
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
        <AdminDeleteModal
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          deleteResortName={deleteResortName}
          deleteResort={deleteResort}
        />
      </div>
    </>
  );
};

export default AdminResorts;
