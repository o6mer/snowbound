import React from "react";
import StraightenIcon from "@mui/icons-material/Straighten";
import CircleIcon from "@mui/icons-material/Circle";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import LandscapeIcon from "@mui/icons-material/Landscape";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HikingIcon from "@mui/icons-material/Hiking";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SnowshoeingIcon from "@mui/icons-material/Snowshoeing";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import DescriptionIcon from "@mui/icons-material/Description";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
const ResortDetails = ({ resortData }) => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col   p-10 shadow-md border rounded  text-lg">
      <div className="head   flex flex-col items-center justify-center ">
        <div className="w-full h-60 relative">
          <img
            src={resortData.image}
            className="w-full h-full object-cover"
            alt="no IMAGE"
          />
          <div className="text-3xl font-bold text-center absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black text-white bg-opacity-60 hover:opacity-0 transition-opacity ease-in-out duration-500">
            <h2>{resortData.name}</h2>
          </div>
        </div>
        <div className=" w-full text-blue-500  py-5 ">
          <h2
            onClick={() => navigate(`/resort/${resortData?.name}`)}
            className="text-2xl font-bold text-center cursor-pointer hover:underline transition-all ease-in-out duration-700 "
          >{`Learn More ->`}</h2>
          {/* <p className="text-gray-600">{resortData.address}</p> */}
        </div>
      </div>
      <div className=" border-y p-5 flex justify-center bg-gray-800 text-white rounded text-xl font-semibold mt-5">
        <h1>About</h1>
      </div>
      <div className="keys  desc flex flex-col  [&>div]:py-5 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>*:nth-child(even)]:bg-gray-200  ">
        <div className="h-[500px] overflow-hidden text-ellipsis">
          <span>
            <DescriptionIcon fontSize="large" sx={{ marginRight: "10px" }} />
            description
          </span>
          <span className="overflow-hidden text-ellipsis [&>#text]:text-ellipsis">
            {" "}
            {resortData?.description}
          </span>
        </div>
      </div>

      <div className=" border-y p-5 flex justify-center bg-gray-800 text-white rounded text-xl font-semibold">
        <h1>Tracks</h1>
      </div>
      <div className="keys tracks flex flex-col [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:py-5  [&>*:nth-child(even)]:bg-gray-200">
        <div>
          <span>
            {" "}
            <StraightenIcon fontSize="large" sx={{ marginRight: "10px" }} />
            KM of Tracks{" "}
          </span>
          <span>{resortData?.kmTrack}</span>
        </div>

        <div>
          <span>
            <CircleIcon
              sx={{ color: "green", marginRight: "10px" }}
              fontSize="large"
            />
            Green Tracks{" "}
          </span>
          <span>{resortData?.greenTrack}</span>
        </div>
        <div>
          <span>
            {" "}
            <CircleIcon
              sx={{ color: "blue", marginRight: "10px" }}
              fontSize="large"
            />
            blue Tracks
          </span>
          <span> {resortData?.blueTrack}</span>
        </div>
        <div>
          <span>
            {" "}
            <CircleIcon
              sx={{ color: "red", marginRight: "10px" }}
              fontSize="large"
            />
            Red Tracks{" "}
          </span>
          <span>{resortData?.redTrack}</span>
        </div>
        <div className="text-black">
          <span>
            <CircleIcon fontSize="large" sx={{ marginRight: "10px" }} />
            Black Tracks{" "}
          </span>
          <span>{resortData?.blackTrack}</span>
        </div>
        <div>
          {" "}
          <span>
            <span>
              <CircleIcon fontSize="large" sx={{ marginRight: "10px" }} />
              <CircleIcon fontSize="large" sx={{ marginRight: "10px" }} />
            </span>
            Black2X Tracks{" "}
          </span>
          <span>{resortData?.blackTrackX2}</span>
        </div>
        <div>
          <span>
            <HikingIcon fontSize="large" sx={{ marginRight: "10px" }} />
            Hiking Tracks
          </span>
          <span>{resortData?.hikingTracks}</span>
        </div>
        <div>
          <span>
            {" "}
            <LandscapeIcon fontSize="large" sx={{ marginRight: "10px" }} />
            Site Height
          </span>
          <span> {resortData?.siteHeight}</span>
        </div>
      </div>
      <div className=" border-y p-5 flex justify-center bg-gray-800 text-white rounded text-xl font-semibold">
        <h1>Rating</h1>
      </div>
      <div className="rates keys flex flex-col [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:py-5  [&>*:nth-child(even)]:bg-gray-200 ">
        <div>
          <span>
            {" "}
            <FamilyRestroomIcon fontSize="large" sx={{ marginRight: "10px" }} />
            Family Friendly{" "}
          </span>
          <span>
            <Rating
              name="read-only"
              value={resortData?.familyFriendly}
              max={3}
              readOnly
            />
            {/* {resortData?.familyFriendly}{" "} */}
          </span>
        </div>
        <div>
          <span>
            {" "}
            <FaceRetouchingNaturalIcon
              fontSize="large"
              sx={{ marginRight: "10px" }}
            />
            KidFriendly Friendly
          </span>
          <span>
            {" "}
            <Rating
              name="read-only"
              value={resortData?.kidFriendly}
              max={3}
              readOnly
            />{" "}
          </span>
        </div>
        <div>
          <span>
            <SnowshoeingIcon fontSize="large" sx={{ marginRight: "10px" }} />
            Beginner Friendly{" "}
          </span>
          <span>
            <Rating
              name="read-only"
              value={resortData?.beginnerFriendly}
              max={3}
              readOnly
            />{" "}
          </span>
        </div>
        <div>
          <span>
            {" "}
            <SelfImprovementIcon
              fontSize="large"
              sx={{ marginRight: "10px" }}
            />
            Intermediate Friendly
          </span>
          <span>
            <Rating
              name="read-only"
              value={resortData?.intermediateFriendly}
              max={3}
              readOnly
            />{" "}
          </span>
        </div>
        <div>
          <span>
            <EmojiEventsIcon fontSize="large" sx={{ marginRight: "10px" }} />
            Pro Friendly{" "}
          </span>
          <span>
            <Rating
              name="read-only"
              value={resortData?.proFriendly}
              max={3}
              readOnly
            />{" "}
          </span>
        </div>
        <div>
          <span>
            {" "}
            <AccessTimeIcon fontSize="large" sx={{ marginRight: "10px" }} />
            Lift Waiting Time{" "}
          </span>
          <span>
            <Rating
              name="read-only"
              value={resortData?.liftWaitingTime}
              max={3}
              readOnly
            />
          </span>
        </div>
        <div>
          <span>
            {" "}
            <AttachMoneyIcon fontSize="large" />
            Price
          </span>
          <span>
            <Rating
              name="read-only"
              value={resortData?.price}
              max={3}
              readOnly
            />{" "}
          </span>
        </div>
        <div>
          <span>
            <ConfirmationNumberIcon
              fontSize="large"
              sx={{ marginRight: "10px" }}
            />
            Ski Pass
          </span>
          <span> {resortData?.skiPass}$</span>
        </div>
      </div>
      <div className="border-y p-5 flex justify-center bg-gray-800 text-white rounded text-xl font-semibold">
        <h1>More ...</h1>
      </div>
      <div className="keys flex flex-col [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:py-5  [&>*:nth-child(even)]:bg-gray-200 ">
        <div>
          <span>
            {" "}
            <AcUnitIcon fontSize="large" sx={{ marginRight: "10px" }} />
            Artificial Snow
          </span>
          <span>
            {resortData?.artificialSnow ? (
              <CheckIcon fontSize="large" sx={{ color: "green" }} />
            ) : (
              <CloseIcon fontSize="large" sx={{ color: "red" }} />
            )}
          </span>
        </div>

        <div>
          <span>
            <WbSunnyIcon fontSize="large" sx={{ marginRight: "10px" }} />
            Off Season
          </span>
          <span>
            {resortData?.offSeason ? (
              <CheckIcon fontSize="large" sx={{ color: "green" }} />
            ) : (
              <CloseIcon fontSize="large" sx={{ color: "red" }} />
            )}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ResortDetails;
