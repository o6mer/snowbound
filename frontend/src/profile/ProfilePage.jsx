import { Divider } from '@mui/material';
import React, { useEffect } from 'react'
import Navbar from '../general/Navbar';
import { useState } from 'react';
import Footer from '../general/Footer';
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Profile.css";
const ProfilePage = () => {
 const navigate = useNavigate();
 const [isLoading,setIsLoading] = useState(false);
 const [userData,setUserData] = useState();
 const [userReviews, setUserReviews] = useState();
 const {userName}=useParams();
 useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const  {data}  = await axios.post(
        `http://localhost:8000/api/user/profile/${userName}`
      );
      console.log(data.info[0].username);
      setUserData(data.info)
      setUserReviews (data.reviews)
      console.log(userData);
      console.log(userReviews)
      setIsLoading(false);
    } catch (err) {
      console.log(err.meessage);
      setIsLoading(false);
    }
  };
  fetchData();
 }, [])
const Edit=()=>{
    navigate(`/EditUser/${userData[0].username}`);
}
const MyReviews=()=>{
    navigate(`/UserReviews/${userData[0].username}`);
}

    return (
      <div>
        <Navbar />
        <Divider />
        {userData && (
          <section class="relative  bg-cover bg-[0px_-100px] bg-no-repeat bg-[url('./assets/profileHero.jpg')] flex font-medium items-center justify-center h-screen">
            <section class="w-64 mx-auto bg-white bg-opacity-50 rounded-2xl px-8 py-6 shadow-lg">
              <div class="flex items-center justify-between">
                <span class="text-gray-400 text-sm">Roll</span>
                <span class="text-emerald-400">
                  <button onClick={Edit} class="text-emerald-400 hover:text-emerald-600">
                    {" "}
                    Edit
                  </button>
                </span>
              </div>
              <div class="mt-6 w-fit mx-auto">
                <img
                  src="https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png"
                  class="rounded-full w-28 "
                  alt="profile picture"
                  srcset=""
                />
              </div>

              <div class="mt-8 ">
                <h2 class=" font-bold text-2xl tracking-wide">
                  {userData[0]?.firstname} <br /> {userData[0]?.lastname}
                </h2>
              </div>
              <p>{userData[0].email}</p>
              {userReviews.length > 4 ? (
                <p class="text-emerald-400 font-semibold mt-2.5">Active</p>
              ) : (
                <p class="text-yellow-400 font-semibold mt-2.5">Inactive</p>
              )}

              <div class="h-1 w-full bg-black mt-8 rounded-full">
                <div class={`h-1 rounded-full w-${userReviews.length} bg-white `}></div>
              </div>
              <div class="mt-3 text-sm">
                <span class="text-gray-400 font-semibold">Reviwes:{" "}</span>
                <span>{userReviews?.length}</span>
              </div>
              <button
                class="inline-flex items-center bg-opacity-50 justify-center  h-8 px-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto  bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                onClick={MyReviews}
              >
                My reviwes
              </button>
            </section>
          </section>
        )}
      </div>
    );
}

export default ProfilePage