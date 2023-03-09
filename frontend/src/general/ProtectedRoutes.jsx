import React, { useContext, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { UserContext } from "../contexts/UserContextProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(UserContext);
  const { auth } = useAuth();

  useEffect(() => {
    auth();
  }, []);

  return <>{user?.admin ? children : <div>no auth</div>}</>;
};
export default ProtectedRoutes;
