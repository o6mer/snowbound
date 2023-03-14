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
  return (
    <section className="flex flex-wrap gap-4 justify-center [&>span]:flex [&>span]:items-center text-lg">
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
      <div className="flex items-center">
        <span>
          {" "}
          <SelfImprovementIcon fontSize="large" sx={{ marginRight: "10px" }} />
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
      <div className="flex items-center">
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
      <div className="flex items-center">
        <span>
          {" "}
          <AttachMoneyIcon fontSize="large" />
          Price
        </span>
        <span>
          <Rating name="read-only" value={resortData?.price} max={3} readOnly />{" "}
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

      <div className="flex items-center">
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

      <div className="flex items-center">
        <span>
          <WbSunnyIcon fontSize="large" sx={{ marginRight: "10px" }} />
          Off Season
        </span>
        <span className="">
          {resortData?.offSeason ? (
            <CheckIcon fontSize="large" sx={{ color: "green" }} />
          ) : (
            <CloseIcon fontSize="large" sx={{ color: "red" }} />
          )}
        </span>
      </div>
    </section>
  );
};

export default ResortDetails;
