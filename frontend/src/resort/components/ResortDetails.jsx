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

const ResortDetails = ({ resortData }) => {
  return (
    <section className="flex flex-wrap gap-4 justify-center [&>span]:flex [&>span]:items-center text-lg">
      <span>
        <StraightenIcon fontSize="small" /> KM of Tracks{" "}
        {resortData?.kmOfTracks}
      </span>
      <span>
        <CircleIcon sx={{ color: "green" }} fontSize="small" />
        Green Tracks {resortData?.greenTrack}
      </span>
      <span>
        <CircleIcon sx={{ color: "blue" }} fontSize="small" />
        blue Tracks {resortData?.blueTrack}
      </span>
      <span>
        <CircleIcon sx={{ color: "red" }} fontSize="small" /> Red Tracks{" "}
        {resortData?.redTrack}
      </span>
      <span className="text-black">
        <CircleIcon fontSize="small" />
        Black Tracks {resortData?.blackTrack}
      </span>
      <span>
        {" "}
        <CircleIcon fontSize="small" />
        <CircleIcon fontSize="small" />
        Black2X Tracks {resortData?.blackTrackX2}
      </span>
      <span>
        <DownhillSkiingIcon fontSize="small" />
        Solo Tracks {resortData?.soloTrack}{" "}
      </span>
      <span>
        <LandscapeIcon fontSize="small" />
        Site Height {resortData?.siteHeight}m
      </span>
      <span>
        <FamilyRestroomIcon fontSize="small" />
        Family Friendly {resortData?.familyFriendly}{" "}
      </span>
      <span>
        <SnowshoeingIcon fontSize="small" />
        Beginner Friendly {resortData?.beginnerFriendly}{" "}
      </span>
      <span>
        <AccessTimeIcon fontSize="small" />
        Lift Waiting Time {resortData?.liftWaitingTime}
      </span>
      <span>
        <AcUnitIcon fontSize="small" />
        Artificial Snow{resortData?.artificialSnow ? " Yes" : " No"}
      </span>

      <span>
        <WbSunnyIcon fontSize="small" />
        Off Season{resortData?.offSeason ? " Yes" : " No"}
      </span>
      <span>
        <HikingIcon fontSize="small" />
        Hiking Tracks{resortData?.hikingTracks}
      </span>
    </section>
  );
};

export default ResortDetails;
