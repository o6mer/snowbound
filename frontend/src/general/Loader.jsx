import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <CircularProgress />
    </div>
  );
};

export default Loader;
