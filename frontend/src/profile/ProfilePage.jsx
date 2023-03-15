import { Divider, TextField } from "@mui/material";
import Navbar from "../general/Navbar";
import { useState } from "react";
import Footer from "../general/Footer";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import UserReviews from "./components/UserReviews";
import "./Profile.css";
import UserTools from "./components/UserTools";
import axios from "axios";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContextProvider";
import EditUser from "./components/EditUser";
import Loader from "../general/Loader";
import Hero from "../assets/profileHero.jpg";
import UserFavorites from "./components/UserFavorites";
const ProfilePage = () => {
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [userData, setUserData] = useState();
  const [userReviews, setUserReviews] = useState([]);
  const [userFavorites, setUserFavorites] = useState();
  const { userName,info } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { data } = await axios.post(
          `http://localhost:8000/api/user/profile/${userName}`
        );
        console.log([
          ...data?.favorites.map((resort) =>resort.resort_id),
        ]);

        setUserFavorites([
          ...data?.favorites.map((resort) => resort.resort_id),
        ]);
        setUserData(data.info[0]);
        setUserReviews(data.reviews);
        console.log(userData);
        console.log(userReviews);
        setIsLoading(false);
      } catch (err) {
        console.log(err.meessage);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Divider />
      {userData ? (
        <>
          <UserTools
            userData={userData}
            setShowFavorites={setShowFavorites}
            setShowReviews={setShowReviews}
          />
          <section className="relative  bg-center  bg-cover  bg-no-repeat  flex font-medium items-center justify-center h-screen bg-black ">
            <div className="absolute top-0 left-0 w-full h-full">
              <img
                className="  h-full w-full object-cover opacity-50"
                src={Hero}
                alt=""
              />
            </div>
            {info == "card"&&!showEdit ? (
              <section className="w-64 mx-auto bg-white bg-opacity-80 rounded-2xl px-8 py-6 shadow-2xl z-10">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Roll</span>
                  <span className="text-emerald-400">
                    <button
                      onClick={() => setShowEdit(true)}
                      className="text-emerald-400 hover:text-emerald-600"
                    >
                      {" "}
                      Edit
                    </button>
                  </span>
                </div>
                <div className="mt-6 w-fit mx-auto">
                  <img
                    src={
                      userData?.pfp
                        ? userData?.pfp
                        : "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png"
                    }
                    className="rounded-full w-28 "
                    alt="profile picture"
                  />
                </div>

                <div className="mt-8 ">
                  <h2 className=" font-bold text-2xl tracking-wide">
                    {userData?.firstname} <br /> {userData?.lastname}
                  </h2>
                </div>
                <p>{userData?.email}</p>
                {userReviews.length > 4 ? (
                  <p className="text-emerald-400 font-semibold mt-2.5">
                    Active
                  </p>
                ) : (
                  <p className="text-yellow-400 font-semibold mt-2.5">
                    Inactive
                  </p>
                )}

                <div className="h-1 w-full bg-black mt-8 rounded-full">
                  <div
                    className={`h-1 rounded-full w-${userReviews.length} bg-white `}
                  ></div>
                </div>
                <div className="mt-3 text-sm">
                  <span className="text-gray-400 font-semibold">Reviwes: </span>
                  <span>{userReviews?.length}</span>
                </div>
                <a
                  className="inline-flex items-center cursor-pointer justify-center  h-8 px-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto  bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                  href={`/profile/${userData.username}/reviews`}
                >
                  My reviews
                </a>
              </section>
              
            ) : showEdit ? (
              <EditUser userData={userData} setShowEdit={setShowEdit} />
            ) : info == "reviews" ? (
              <div className="z-10">
                <a className="inline-flex items-center cursor-pointer bg-opacity-70 justify-center  h-8 px-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto  bg-yellow-500 hover:bg-yellow-700 focus:shadow-outline focus:outline-none">
                  Your reviews
                </a>{" "}
                <UserReviews userReviews={userReviews} />
              </div>
            ) : info == "favorites" ? (
              <UserFavorites favorites={userFavorites} />
            ) : (
              <></>
            )}
          </section>

          <Footer />
        </>
      ) : (
        <div className="h-screen">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
