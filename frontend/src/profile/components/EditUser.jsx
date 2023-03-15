import React from 'react'
import { useState } from 'react';
import { TextField } from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useContext, useEffect } from "react";
import {UserContext} from "../../contexts/UserContextProvider";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const EditUser = ({ userData, setShowEdit }) => {
  const navigate=useNavigate();
  const [user, setUser] = useState({
    email: userData.email,    
    username:userData.username,
    firstname: userData.firstname,
    lastname: userData.lastname,
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ email: false, password: false });

const updateUser=async({email, password, username, firstname, lastname})=>{
try {
      if (!email || !password || !username || !firstname || !lastname) return;

      const { data } = await axios.post(
        "http://localhost:8000/api/user/update",
        {
          userId:userData?.id,valuesToUpdate:{email, password, username, firstname, lastname}
        }
      );
      console.log(data);
       } catch (err) {
      console.log(err.message);
    }
  };
 
    
  const handleUpdate = async (e) => {
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
      await updateUser({ ...user });
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
    document.body.style.overflow = "auto";
    window.location.reload();
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
    <section class="w-64 mx-auto bg-white bg-opacity-90 rounded-2xl px-8 py-6 shadow-lg z-10">
      <div class="flex items-center justify-between">
        <span class="text-emerald-400">
          <button
            onClick={() => setShowEdit(false)}
            class="text-emerald-400 hover:text-emerald-600"
          >
            {" "}
            <ArrowBackIcon />
            Back
          </button>
        </span>{" "}
        <span class="text-gray-400 text-sm">Roll</span>
      </div>
      <div class="mr-8 mt-6 w-fit mx-auto">
        <img
          src={
            userData?.pfp
              ? userData?.pfp
              : "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png"
          }
          className="rounded-full w-28 "
          alt="profile picture"
        />
        <button class="text-gray-400 hover:text-gray-600 ">
          {" "}
          Choose a picture
        </button>
      </div>

      <div class="mt-8 space-y-3">
        <TextField
          error={isError.email}
          defaultValue={userData?.email}
          label="E-mail"
          type="email"
          variant="outlined"
          name="email"
          size="small"
          onChange={handleChange}
        />
        <TextField
          error={isError.username}
          defaultValue={userData?.username}
          label="User name"
          type="text"
          variant="outlined"
          name="username"
          size="small"
          onChange={handleChange}
        />
        <TextField
          error={isError.firstname}
          defaultValue={userData?.firstname}
          label="First Name"
          name="firstname"
          type="text"
          variant="outlined"
          size="small"
          onChange={handleChange}
        />
        <TextField
          error={isError.lastname}
          defaultValue={userData?.lastname}
          label="Last Name"
          type="text"
          name="lastname"
          variant="outlined"
          size="small"
          onChange={handleChange}
        />
        <TextField
          error={isError.password}
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          size="small"
          onChange={handleChange}
        />
      </div>

      <button
        class="mt-2 inline-flex items-center bg-opacity-90 justify-center  h-8 px-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto  bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
        onClick={handleUpdate}
      >
        Confirm
      </button>
    </section>
  );
};

export default EditUser