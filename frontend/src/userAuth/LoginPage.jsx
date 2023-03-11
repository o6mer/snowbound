import React, { useState } from "react";
import Navbar from "../general/Navbar";
import "./Login.css";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import Loader from "../general/Loader";
const LoginPage = (props) => {
  if (!props.open) {
    return null;
  }
  useEffect(() => {
    const switchers = [...document.querySelectorAll(".switcher")];

    switchers.forEach((item) => {
      item.addEventListener("click", function () {
        switchers.forEach((item) =>
          item.parentElement.classList.remove("is-active")
        );
        this.parentElement.classList.add("is-active");
      });
    });
  }, []);

  const [user, setUser] = useState({ email: "", password: "" });

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ email: false, password: false });

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!user.email || !user.password)
      return setIsError({ email: !user.email, password: !user.password });

    console.log("subbbbbbbbmited");

    try {
      setIsLoading(true);
      await login({ ...user });
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    if (isError) setIsError(true);

    const field = e.currentTarget.type;
    const value = e.currentTarget.value;
    setUser((prev) => {
      prev[field] = value;
      return { ...prev };
    });
  };

  return (
    <section
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 modal animated 
      ${props.open ? "fadeIn overflow-auto" : "fadeOut faster"}  shadow-2xl`}
    >
      <div className="forms absolute left-96 ">
        <div className="form-wrapper is-active">
          <button type="button" className="switcher switcher-login">
            Login
            <span className="underline"></span>
          </button>
          <form className="form form-login" onSubmit={handleLogin}>
            <button
              type="button"
              onClick={props.onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            >
              <CloseIcon />
            </button>

            <fieldset className="mt-4">
              <TextField
                label="E-mail"
                type="email"
                variant="outlined"
                value={user.email}
                onChange={handleChange}
                error={isError.email}
              />
              <br />
              <TextField
                sx={{
                  marginTop: "1rem",
                }}
                label="Password"
                type="password"
                variant="outlined"
                onChange={handleChange}
                value={user.password}
                error={isError.password}
              />
            </fieldset>
            {isLoading ? (
              <div>
                <Loader />
              </div>
            ) : (
              <button
                type="submit"
                className=" hover:bg-blue-500/50 shadow-lg shadow-blue-500/50 rounded-full "
                Login
              >
                Login
              </button>
            )}
          </form>
        </div>
        <div className="form-wrapper">
          <button type="button" className="switcher switcher-signup">
            Sign Up
            <span className="underline"></span>
          </button>
          <form className="form form-signup">
            <button
              onClick={props.onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            >
              <CloseIcon />
            </button>
            <fieldset className="mt-4">
              <TextField label="E-mail" type="email" variant="outlined" />
              <br />
              <TextField
                sx={{
                  marginTop: "1rem",
                }}
                label="User name"
                type="text"
                variant="outlined"
              />
              <br />
              <TextField
                sx={{
                  marginTop: "1rem",
                }}
                label="Full name"
                type="text"
                variant="outlined"
              />
              <br />
              <TextField
                sx={{
                  marginTop: "1rem",
                }}
                label="Password"
                type="password"
                variant="outlined"
              />
              <br />
              <TextField
                sx={{
                  marginTop: "1rem",
                }}
                label="Verify password"
                type="password"
                variant="outlined"
              />
            </fieldset>
            <button
              type="submit"
              className=" hover:bg-blue-500/50 shadow-lg shadow-blue-500/50 rounded-full "
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
