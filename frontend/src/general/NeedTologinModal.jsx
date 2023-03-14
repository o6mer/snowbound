import { Modal } from "@mui/material";
import React, { useState } from "react";
import LoginPage from "../userAuth/LoginPage";

const NeedTologinModal = ({ text, open, handleClose }) => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  max-w-sm w-full  bg-white p-12 rounded-lg flex flex-col gap-4">
          <header className="text-lg">{text}</header>
          <button
            onClick={() => {
              setOpenLogin(true);
              handleClose();
            }}
          >
            Login
          </button>
        </div>
      </Modal>
      <LoginPage
        open={openLogin}
        onClose={() => {
          setOpenLogin(false);
          document.body.style.overflow = "hidden";
        }}
      />
    </>
  );
};

export default NeedTologinModal;
