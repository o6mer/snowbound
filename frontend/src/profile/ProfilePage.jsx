import { Divider, TextField } from '@mui/material';
import Navbar from '../general/Navbar';
import { useState } from 'react';
import Footer from '../general/Footer';
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import UserReviews from './components/UserReviews';
import "./Profile.css";
import UserTools from './components/UserTools';
import axios from "axios";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContextProvider";
import EditUser from './components/EditUser';
const ProfilePage = () => {
const [showEdit,setShowEdit] = useState(false);
 const navigate = useNavigate();
 const [isLoading,setIsLoading] = useState(false);
 const [showReviews, setShowReviews] = useState(false);
 const [userData,setUserData] = useState();
 const [userReviews, setUserReviews] = useState([]);
 const {userName}=useParams();
 useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);
    
    try {
      const  {data}  = await axios.post(
        `http://localhost:8000/api/user/profile/${userName}`
      );
      console.log(data.info);
      setUserData(data.info[0])
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



    return (
      <div>
        <Navbar />
        <Divider />
        {/* <UserTools /> */}
        {userData && (
          <section class="relative  bg-center  bg-cover  bg-no-repeat bg-[url('./assets/profileHero.jpg')]   bg-opacity-50 flex font-medium items-center justify-center h-screen">
            {!showEdit ? (
              <section class="w-64 mx-auto bg-white bg-opacity-70 rounded-2xl px-8 py-6 shadow-2xl">
                <div class="flex items-center justify-between">
                  <span class="text-gray-400 text-sm">Roll</span>
                  <span class="text-emerald-400">
                    <button
                      onClick={() => setShowEdit(true)}
                      class="text-emerald-400 hover:text-emerald-600"
                    >
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
                    {userData?.firstname} <br /> {userData?.lastname}
                  </h2>
                </div>
                <p>{userData.email}</p>
                {userReviews.length > 4 ? (
                  <p class="text-emerald-400 font-semibold mt-2.5">Active</p>
                ) : (
                  <p class="text-yellow-400 font-semibold mt-2.5">Inactive</p>
                )}

                <div class="h-1 w-full bg-black mt-8 rounded-full">
                  <div
                    class={`h-1 rounded-full w-${userReviews.length} bg-white `}
                  ></div>
                </div>
                <div class="mt-3 text-sm">
                  <span class="text-gray-400 font-semibold">Reviwes: </span>
                  <span>{userReviews?.length}</span>
                </div>
                <button
                  class="inline-flex items-center bg-opacity-50 justify-center  h-8 px-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto  bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                  onClick={() => setShowReviews(true)}
                >
                  My reviews
                </button>
              </section>
            ) : (
              <EditUser userData={userData} setShowEdit={setShowEdit} />
            )}

            {showReviews && (
              <div>
                <button
                  onClick={() => setShowReviews(false)}
                  class="inline-flex items-center bg-opacity-70 justify-center  h-8 px-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto  bg-yellow-500 hover:bg-yellow-700 focus:shadow-outline focus:outline-none"
                >
                  Hide reviews
                </button>{" "}
                <UserReviews userReviews={userReviews} />
              </div>
            )}
          </section>
        )}
        <Footer />
      </div>
    );
}

export default ProfilePage