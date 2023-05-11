import React, { useState } from "react";
import "./Login.css";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import Loader from "../general/Loader";

const SignupPage = ({ onClose }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    firstname: "",
    lastname: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ email: false, password: false });

  const { signup } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !user.email ||
      !user.password ||
      !user.firstname ||
      !user.lastname ||
      !user.username
    )
      return setIsError({
        email: !user.email,
        password: !user.password,
        username: !user.username,
        firstname: !user.firstname,
        lastname: !user.lastname,
      });

    try {
      setIsLoading(true);
      await signup({ ...user });
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
    document.body.style.overflow = "auto";
  };

  const handleChange = (e) => {
    if (isError) setIsError(true);

    const field = e.currentTarget.name;
    const value = e.currentTarget.value;
    setUser((prev) => {
      prev[field] = value;
      return { ...prev };
    });
  };

  return (
    <div className="form-wrapper mt-10">
      <button type="button" className="switcher switcher-signup">
        Sign Up
        <span className="underline"></span>
      </button>
      <form className="form form-signup" onSubmit={handleRegister}>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
        >
          <CloseIcon />
        </button>
        <fieldset className="flex flex-col gap-4">
          <TextField
            error={isError.email}
            value={user.email}
            label="E-mail"
            type="email"
            variant="outlined"
            name="email"
            onChange={handleChange}
          />
          <TextField
            error={isError.username}
            value={user.username}
            label="User name"
            type="text"
            variant="outlined"
            name="username"
            onChange={handleChange}
          />
          <div className="flex gap-2">
            <TextField
              error={isError.firstname}
              value={user.firstname}
              label="First Name"
              name="firstname"
              type="text"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              error={isError.lastname}
              value={user.lastname}
              label="Last Name"
              type="text"
              name="lastname"
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <TextField
            error={isError.password}
            value={user.password}
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            onChange={handleChange}
          />
          <br />
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
            Sign up
          </button>
        )}
      </form>
    </div>
  );
};

export default SignupPage;
