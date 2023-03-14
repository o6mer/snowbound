import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { UserContext } from "../contexts/UserContextProvider";
import { Navigate } from "react-router-dom";
import Loader from "./Loader";

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(UserContext);
  const { auth } = useAuth();
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    (async function () {
      setIsloading(true);
      await auth();
      setIsloading(false);
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen">
          {" "}
          <Loader />{" "}
        </div>
      ) : user?.admin ? (
        children
      ) : (
        <div>no auth</div>
      )}
    </>
  );
};
export default ProtectedRoutes;
