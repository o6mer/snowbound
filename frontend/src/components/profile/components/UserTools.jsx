import * as React from "react";
import Logout from "@mui/icons-material/Logout";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Search from "@mui/icons-material/Search";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { useNavigate } from "react-router-dom";
import AcUnitIcon from "@mui/icons-material/AcUnit";
const UserTools = ({ userData, setShowFavorites, setShowReviews }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="z-20 flex-col items-center w-40 h-full overflow-hidden text-black bg-white ">
        <a className="flex items-center w-full px-3 mt-3" href="#">
          <AcUnitIcon />
          <span className="ml-2 text-sm font-bold">
            Hello {userData?.firstname}
          </span>
        </a>
        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
            <a
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-200"
              href={`/profile/${userData.username}/card`}
            >
              <DashboardIcon />
              <span className="ml-2 text-sm font-medium">Dasboard</span>
            </a>
            <a
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-200"
              href={`/profile/${userData.username}/reviews`}
            >
              <ReviewsIcon />
              <span className="ml-2 text-sm font-medium">Reviews</span>
            </a>
            <a
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-200"
              href={`/profile/${userData.username}/favorites`}
            >
              <FavoriteBorder />
              <span className="ml-2 text-sm font-medium">Favorites</span>
            </a>
          </div>
          <div className="flex flex-col items-center w-full mt-2 border-t border-gray-200">
            <button
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-200"
              onClick={() => navigate("/")}
            >
              <Search />
              <span className="ml-2 text-sm font-medium">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTools;
