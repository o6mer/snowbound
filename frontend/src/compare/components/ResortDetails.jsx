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
const ResortDetails = ({ resortData }) => {
  return (
    <section className="flex flex-col gap-4 justify-center p-10 shadow-md border rounded  text-lg">
      <div className=" border-y p-5 flex justify-center bg-gray-600 text-white rounded">
        <h1>About</h1>
      </div>
      <div className="keys desc flex flex-col  [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>*:nth-child(even)]:bg-gray-200  ">
        <div>
          <span>description:</span>
          <span> {resortData?.description}</span>
        </div>
      </div>

      <div className=" border-y p-5 flex justify-center bg-gray-600 text-white rounded">
        <h1>Tracks</h1>
      </div>
      <div className="keys tracks flex flex-col [&>div]:flex [&>div]:flex-col [&>div]:items-center gap-5 [&>*:nth-child(even)]:bg-gray-200">
        <div>
          <span>
            {" "}
            <StraightenIcon fontSize="small" />
            KM of Tracks{" "}
          </span>
          <span>{resortData?.kmTrack}</span>
        </div>

        <div>
          <span>
            <CircleIcon sx={{ color: "green" }} fontSize="small" />
            Green Tracks{" "}
          </span>
          <span>{resortData?.greenTrack}</span>
        </div>
        <div>
          <span>
            {" "}
            <CircleIcon sx={{ color: "blue" }} fontSize="small" />
            blue Tracks
          </span>
          <span> {resortData?.blueTrack}</span>
        </div>
        <div>
          <span>
            {" "}
            <CircleIcon sx={{ color: "red" }} fontSize="small" />
            Red Tracks{" "}
          </span>
          <span>{resortData?.redTrack}</span>
        </div>
        <div className="text-black">
          <span>
            <CircleIcon fontSize="small" />
            Black Tracks{" "}
          </span>
          <span>{resortData?.blackTrack}</span>
        </div>
        <div>
          {" "}
          <span>
            <span>
              <CircleIcon fontSize="small" />
              <CircleIcon fontSize="small" />
            </span>
            Black2X Tracks{" "}
          </span>
          <span>{resortData?.blackTrackX2}</span>
        </div>
        <div>
          <span>
            <HikingIcon fontSize="small" />
            Hiking Tracks
          </span>
          <span>{resortData?.hikingTracks}</span>
        </div>
        <div>
          <span>
            {" "}
            <LandscapeIcon fontSize="small" />
            Site Height
          </span>
          <span> {resortData?.siteHeight}</span>
        </div>
      </div>
      <div className=" border-y p-5 flex justify-center bg-gray-600 text-white rounded">
        <h1>Rating</h1>
      </div>
      <div className="rates keys flex flex-col [&>div]:flex [&>div]:flex-col [&>div]:items-center gap-5 [&>*:nth-child(even)]:bg-gray-200 ">
        <div>
          <span>
            {" "}
            <FamilyRestroomIcon fontSize="small" />
            Family Friendly{" "}
          </span>
          <span>{resortData?.familyFriendly} </span>
        </div>
        <div>
          <span>
            {" "}
            <FaceRetouchingNaturalIcon fontSize="small" />
            KidFriendly Friendly
          </span>
          <span> {resortData?.kidFriendly} </span>
        </div>
        <div>
          <span>
            <SnowshoeingIcon fontSize="small" />
            Beginner Friendly{" "}
          </span>
          <span>{resortData?.beginnerFriendly} </span>
        </div>
        <div>
          <span>
            {" "}
            <SelfImprovementIcon fontSize="small" />
            Intermediate Friendly
          </span>
          <span> {resortData?.intermediateFriendly} </span>
        </div>
        <div>
          <span>
            <EmojiEventsIcon fontSize="small" />
            Pro Friendly{" "}
          </span>
          <span>{resortData?.proFriendly} </span>
        </div>
        <div>
          <span>
            {" "}
            <AccessTimeIcon fontSize="small" />
            Lift Waiting Time{" "}
          </span>
          <span>{resortData?.liftWaitingTime}</span>
        </div>
        <div>
          <span>
            {" "}
            <AttachMoneyIcon fontSize="small" />
            Price
          </span>
          <span> {resortData?.price}</span>
        </div>
        <div>
          <span>
            <ConfirmationNumberIcon fontSize="small" />
            Ski Pass
          </span>
          <span> {resortData?.skiPass}$</span>
        </div>
      </div>
      <div className="border-y p-5 flex justify-center bg-gray-600 text-white rounded">
        <h1>More</h1>
      </div>
      <div className="keys flex flex-col [&>div]:flex [&>div]:flex-col [&>div]:items-center gap-5 [&>*:nth-child(even)]:bg-gray-200 ">
        <div>
          <span>
            {" "}
            <AcUnitIcon fontSize="small" />
            Artificial Snow
          </span>
          <span>{resortData?.artificialSnow ? " Yes" : " No"}</span>
        </div>

        <div>
          <span>
            <WbSunnyIcon fontSize="small" />
            Off Season
          </span>
          <span>{resortData?.offSeason ? " Yes" : " No"}</span>
        </div>
      </div>
    </section>
  );
};

export default ResortDetails;
