import * as React from "react";
import Logout from "@mui/icons-material/Logout";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Search from "@mui/icons-material/Search";
import ReviewsIcon from '@mui/icons-material/Reviews';
import { useNavigate } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";
const UserTools = ({ userData, setShowFavorites,setShowReviews }) => {
const navigate=useNavigate()
  return (
    <div>
      <div class="absolute z-20 flex-col items-center w-40 h-full overflow-hidden text-black bg-white ">
        <a class="flex items-center w-full px-3 mt-3" href="#">
          <AcUnitIcon />
          <span class="ml-2 text-sm font-bold">
            Hello {userData?.firstname}
          </span>
        </a>
        <div class="w-full px-2">
          <div class="flex flex-col items-center w-full mt-3 border-t border-gray-700">
            <button
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
              onClick={() => {
                setShowFavorites(false);
                setShowReviews(false);
              }}
            >
              <DashboardIcon />
              <span class="ml-2 text-sm font-medium">Dasboard</span>
            </button>
            <button
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
              onClick={() => navigate("/")}
            >
              <Search />
              <span class="ml-2 text-sm font-medium">Search</span>
            </button>

            <button
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
              onClick={() =>{setShowReviews(false); setShowFavorites(true)}}
            >
              <FavoriteBorder />
              <span class="ml-2 text-sm font-medium">Favorites</span>
            </button>
          </div>
          <div class="flex flex-col items-center w-full mt-2 border-t border-gray-700">
            <button
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
              onClick={() => {setShowReviews(true);setShowFavorites(false);}}
            >
              <ReviewsIcon />
              <span class="ml-2 text-sm font-medium">Reviews</span>
            </button>
            <a
              class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
              href="#"
            >
              <svg
                class="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span class="ml-2 text-sm font-medium">Settings</span>
            </a>
          </div>
        </div>
        <a
          class="flex items-center justify-center w-full h-16 mt-auto text-white bg-red-600 hover:bg-red-800"
          href="#"
        >
          <Logout />
          <span class="ml-2 text-sm font-medium">Log out</span>
        </a>
      </div>
    </div>
  );
};

export default UserTools;
