import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SearchModel from "../general/SearchModel";
import CompareTable from "./components/CompareTable";
import CompareFilter from "./components/CompareFilter";
import Footer from "../general/Footer";

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
  // const { query } = useParams();
  // useEffect(() => {
  //   console.log(query);

  //   axios
  //     .get(`http://localhost:8000/api/compare/${query}`)
  //     .then((res) => {
  //       setCompareData([]);
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const getFilterResorts = (filterKeys) => {
    //   axios
    //     .post(`http://localhost:8000/api/compare`, filterKeys)
    //     .then((res) => {
    //       setCompareData([]);
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };

    const temp = DUMMY_RESORT.map((resort) => {
      const entries = Object.entries(resort);
      const obj = {};

      entries.forEach((entry) => {
        const [key, value] = entry;
        if (filterKeys.find((filter) => filter === key)) obj[key] = value;
      });

      return obj;
    });
    console.log(temp);
    setCompareData(temp);
  };
  const resetFilterResorts = () => {
    //full array
    setCompareData(DUMMY_RESORT);
  };

  return (
    <div className="px-[10vw]">
      <SearchModel />
      <CompareFilter
        DUMMY_RESORT={DUMMY_RESORT}
        getFilterResorts={getFilterResorts}
        resetFilterResorts={resetFilterResorts}
      />
      <CompareTable DUMMY_RESORT={compareData} />
      <Footer />
    </div>
  );
};

export default ComparePage;
