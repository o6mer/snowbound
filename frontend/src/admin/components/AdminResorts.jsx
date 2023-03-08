import React from "react";
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
const AdminResorts = ({ adminResorts, deleteResort }) => {
  const navigate = useNavigate();
  //   const deleteResort = (resortName) => {
  //     axios
  //       .delete(`http://localhost:8000/api/resort/${resortName}`)
  //       .then((res) => {
  //         alert("deleted");
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     // alert(resortName);
  //   };
  return (
    <>
      <div className=" flex flex-col gap-5">
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
                  onClick={() => deleteResort(resort.name)}
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <List>
        {adminResorts.map((resort, index) => {
          return (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={resort.avatar} />
              </ListItemAvatar>
              <ListItemText
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                }}
                primary={resort.name}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {resort.country_id}
                    </Typography>
                    <Typography component="span">{` — ${resort.description}`}</Typography>
                  </>
                }
              />
              <ListItemButton>adasdas</ListItemButton>
              <Divider />
            </ListItem>
          );
        })}
      </List>
      {/* <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List> */}

      {/* <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List> */}
    </>
  );
};

export default AdminResorts;
