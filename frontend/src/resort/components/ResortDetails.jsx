import React from "react";

const ResortDetails = ({ resortData }) => {
  return (
    <section className="flex flex-wrap gap-4">
      <span>KM of Tracks {resortData?.kmOfTracks}</span>
      <span>Green Tracks {resortData?.greenTrack}</span>
      <span>blue Tracks {resortData?.blueTrack}</span>
      <span>Red Tracks {resortData?.redTrack}</span>
      <span>Black Tracks {resortData?.blackTrack}</span>
      <span>Black2X Tracks {resortData?.blackTrackX2}</span>
      <span>Solo Tracks {resortData?.soloTrack}</span>
      <span>Site Height {resortData?.siteHiegt}</span>
      <span>Beginner Friendly {resortData?.beginnerFriendly}</span>
      <span>Lift Waiting Time {resortData?.liftWaitingTime}</span>
      <span>Artificial Snow{resortData?.artificialSnow ? " Yes" : " No"}</span>
      <span>Off Season{resortData?.offSeason ? " Yes" : " No"}</span>
      <span>Hiking Tracks{resortData?.hikingTracks}</span>
    </section>
  );
};

export default ResortDetails;
