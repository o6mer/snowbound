import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AdminDeleteModal = ({
  modalOpen,
  setModalOpen,
  deleteResortName,
  deleteResort,
}) => {
  // const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <Dialog
      sx={{ backgroundColor: "transparent" }}
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Delete -- {deleteResortName}?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this resort ? Once you delete it you
          will no longer be able to access it.
          {/* Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running. */}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button
          onClick={() => {
            deleteResort(deleteResortName);
            setModalOpen(false);
          }}
          autoFocus
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdminDeleteModal;
