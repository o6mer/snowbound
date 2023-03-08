import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContextProvider";

const useAuth = () => {
  const { token, setToken } = useContext(UserContext);

  const login = async ({ email, password }) => {
    if (!email || !password) return;
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/user/login",
        {
          email,
          password,
        }
      );

      const { token } = data;

      if (!token) return;

      setToken(token);
    } catch (err) {
      console.log(err.message);
    }
  };

  const signup = async ({ email, password, username, firstname, lastname }) => {
    try {
      if (!email || !password || !username || !firstname || !lastname) return;

      const { data } = await axios.post(
        "http://localhost:8000/api/user/register",
        {
          email,
          password,
          username,
          firstname,
          lastname,
        }
      );

      const { token } = data;

      if (!token) return;

      setToken(token);
    } catch (err) {
      console.log(err.message);
    }
  };

  const auth = async () => {
    try {
    } catch (err) {}
  };

  return { login, signup, auth };
};

export default useAuth;
