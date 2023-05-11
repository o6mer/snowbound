import { Button, Divider, Modal } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContextProvider";
import CloseIcon from "@mui/icons-material/Close";

const NeedTologinModal = ({ text, open, handleClose }) => {
  const { setOpenLogin } = useContext(UserContext);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  max-w-sm w-full  bg-white p-12 rounded-lg flex flex-col gap-4">
          <header className="">
            <button className=" absolute right-4 top-4" onClick={handleClose}>
              <CloseIcon />
            </button>
            <div className="flex justify-center">
              <p className="text-xl font-bold">{text}</p>
            </div>
          </header>
          <Divider />
          <Button
            variant="contained"
            onClick={() => {
              setOpenLogin(true);
              handleClose();
            }}
          >
            Login
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default NeedTologinModal;
