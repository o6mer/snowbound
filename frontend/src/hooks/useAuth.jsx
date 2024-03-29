import axios from "axios";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContextProvider";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";

export const useAuth = () => {
  const cookies = new Cookies();
  const { token, setToken, user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    auth();
  }, []);

  useEffect(() => {
    if (!token) return;

    cookies.set("token", token, { path: "/" });
  }, [token]);

  const login = async ({ email, password }) => {
    if (!email || !password) return;
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
        {
          email,
          password,
        }
      );

      const { user, token } = data;

      if (!token || !user) return;

      setUser(user);
      setToken(token);
    } catch (err) {
      console.log(err.message);
    }
  };

  const signup = async ({ email, password, username, firstname, lastname }) => {
    try {
      if (!email || !password || !username || !firstname || !lastname) return;

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/register`,
        {
          email,
          password,
          username,
          firstname,
          lastname,
        }
      );

      const { user, token } = data;

      if (!token || !user) return;

      setUser(user);
      setToken(token);
    } catch (err) {
      console.log(err.message);
    }
  };
  const updateUser = async ({
    user,
    valuesToUpdate: { email, password, username, firstname, lastname },
  }) => {};
  const auth = async () => {
    try {
      const savedToken = cookies.get("token");

      if (!savedToken) return;

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/auth`,
        {},
        {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        }
      );

      if (data?.message === "Token expired") return logout();

      if (!data.user) return;

      setUser(data.user);
      setToken(savedToken);
    } catch (err) {
      console.log(err.message);
    }
  };

  const logout = () => {
    cookies.remove("token", { path: "/" });
    setToken();
    setUser();
  };

  return { login, signup, logout, auth };
};
