import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DUMMY_RESORT = {
  name: "resort name",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, consequatur rem amet perferendis fuga nobis dignissimos minima voluptatem doloremque maxime.",
  liveCam:
    "https://www.skylinewebcams.com/en/webcam/italia/veneto/belluno/cortina-d-ampezzo.html",
  location: "google location",
  city: "resort city",
  country: "resort country",
  price: "3",
  kmOfTracks: "80",
  greenTrack: "5",
  blueTrack: "10",
  redTrack: "15",
  blackTrack: "20",
  blackTrack2X: "25",
  soloTrack: "30",
  siteHiegt: "3000",
  beginnerFriendly: "1",
  intermediateFriendly: "2",
  proFriendly: "3",
  kidFriendly: "2",
  familyFriendly: "1",
  liftWaitingTime: "2",
  artificialSnow: true,
  offSeason: false,
  hikingTracks: "10",
};

const ResortPage = () => {
  const [resortData, setResortData] = useState(DUMMY_RESORT);
  const [isLoading, setIsLoading] = useState(false);

  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `http://localhost:8000/resort/${name}`
        );

        if (!data) return;
        setIsLoading(false);
        setResortData({ ...data });
      } catch (err) {
        console.log(err.meessage);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex flex-col w-full h-full px-12">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <header>{resortData?.name}</header>
              <p>{resortData?.description}</p>
            </div>
            <iframe
              src={resortData.liveCam}
              frameborder="0"
              alt="iframe"
            ></iframe>
          </div>
          <div className="flex flex-wrap gap-4">
            <span>KM of Tracks {resortData.kmOfTracks}</span>
            <span>Green Tracks {resortData.greenTrack}</span>
            <span>blue Tracks {resortData.blueTrack}</span>
            <span>Red Tracks {resortData.redTrack}</span>
            <span>Black Tracks {resortData.blackTrack}</span>
            <span>Black2X Tracks {resortData.blackTrack2X}</span>
            <span>Solo Tracks {resortData.soloTrack}</span>
            <span>Site Height {resortData.siteHiegt}</span>
            <span>Beginner Friendly {resortData.beginnerFriendly}</span>
            <span>Lift Waiting Time {resortData.liftWaitingTime}</span>
            <span>Artificial Snow{resortData.artificialSnow}</span>
            <span>Off Season{resortData.offSeason}</span>
            <span>Hiking Tracks{resortData.hikingTracks}</span>
          </div>
        </>
      )}
    </main>
  );
};

export default ResortPage;
