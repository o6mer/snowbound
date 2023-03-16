import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FindModel from "../general/Modals/FindModal";
import CompareTable from "./components/CompareTable";
import CompareFilter from "./components/CompareFilter";
import Footer from "../general/Footer";
import Navbar from "../general/Navbar";

import ResortNotFound from "../admin/components/ResortNotFound";
import Loader from "../general/Loader";
import { useAuth } from "../hooks/useAuth";
// import AboutPage from "../AboutPage/AboutPage";
let dummyResorts = [];

const ComparePage = () => {
  const DUMMY_RESORT = [
    {
      name: "resort name",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, consequatur rem amet perferendis fuga nobis dignissimos minima voluptatem doloremque maxime.",
      // liveCam:
      //   "https://www.skylinewebcams.com/en/webcam/italia/veneto/belluno/cortina-d-ampezzo.html",
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
    },
    {
      name: "resort name",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, consequatur rem amet perferendis fuga nobis dignissimos minima voluptatem doloremque maxime.",
      // liveCam:
      //   "https://www.skylinewebcams.com/en/webcam/italia/veneto/belluno/cortina-d-ampezzo.html",
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
    },
    {
      name: "resort name",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, consequatur rem amet perferendis fuga nobis dignissimos minima voluptatem doloremque maxime.",
      // liveCam:
      //   "https://www.skylinewebcams.com/en/webcam/italia/veneto/belluno/cortina-d-ampezzo.html",
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
    },
  ];

  const [compareData, setCompareData] = useState(DUMMY_RESORT);
  const { resortCompare } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // console.log(query);
    const queryNames = resortCompare.split("&");
    console.log(queryNames);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/resort/compare`, {
        names: queryNames,
      })
      .then((res) => {
        const resorts = res.data.resort;
        setCompareData([...resorts]);
        dummyResorts = [...resorts];
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useAuth();

  const getFilterResorts = (filterKeys) => {
    if (!filterKeys.length) {
      setCompareData([...dummyResorts]);
    } else {
      const temp = dummyResorts?.map((resort) => {
        const entries = Object.entries(resort);
        const obj = {};

        obj.name = resort.name;
        entries.forEach((entry) => {
          const [key, value] = entry;
          if (filterKeys.find((filter) => filter === key)) obj[key] = value;
        });
        return obj;
      });

      console.log(temp);
      setCompareData([...temp]);
      return temp;
    }
  };
  const resetFilterResorts = () => {
    //full array
    setCompareData(dummyResorts);
  };

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          {compareData?.length !== 2 && compareData?.length !== 3 ? (
            <div>
              <ResortNotFound />
            </div>
          ) : (
            <div className="p-[5vw] ">
              <CompareTable DUMMY_RESORT={compareData} />
            </div>
          )}
        </>
      )}
      <Footer />
    </>
  );
};

export default ComparePage;
