import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [openLogin, setOpenLogin] = useState(false);
  const [isSnowing, setIsSnowing] = useState();

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        openLogin,
        setOpenLogin,
        isSnowing,
        setIsSnowing,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
