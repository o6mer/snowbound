import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContextProvider";

const ProtectedRoutes = ({ children }) => {
  const { token } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/");
  }, [token]);

  return <div>ProtectedRoutes</div>;
};

export default ProtectedRoutes;
