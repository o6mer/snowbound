import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Divider from "@mui/material/Divider";
import ResortHeader from "./components/ResortHeader";
import ResortDetails from "./components/ResortDetails";
import ResortPicturesInfo from "./components/ResortPicturesInfo";
import ResortMoreToDo from "./components/ResortMoreToDo";
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";
import ResortMoreResorts from "./components/ResortMoreResorts";
import Loader from "../general/Loader";
import ResortNotFound from "./components/ResortNotFound";

const DUMMY_RESORT = {
  name: "resort name",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, consequatur rem amet perferendis fuga nobis dignissimos minima voluptatem doloremque maxime.",
  exstraDetails:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus iusto, soluta libero maiores ipsa consequuntur asperiores deserunt perferendis eum explicabo, laborum culpa voluptas. Libero placeat ratione repellendus accusamus ipsam.",
  liveCam:
    "https://www.skylinewebcams.com/en/webcam/italia/veneto/belluno/cortina-d-ampezzo.html",
  pictures: [
    "https://media.cnn.com/api/v1/images/stellar/prod/211218043659-06-best-ski-resorts-restricted.jpg?q=h_2000,w_3000,x_0,y_0",
    "https://media.cnn.com/api/v1/images/stellar/prod/211218043659-06-best-ski-resorts-restricted.jpg?q=h_2000,w_3000,x_0,y_0",
    "https://media.cnn.com/api/v1/images/stellar/prod/211218043659-06-best-ski-resorts-restricted.jpg?q=h_2000,w_3000,x_0,y_0",
  ],
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
  location: "-33.8670522,151.1957362",
};

const ResortPage = () => {
  const [resortData, setResortData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const transFormedName = name.charAt(0).toUpperCase() + name.slice(1);

        const { data } = await axios.get(
          `http://localhost:8000/api/resort/find/${transFormedName}`
        );

        if (!data[0].length || !data[1].length) return setIsLoading();

        console.log(data);

        setResortData({
          ...data[0][0],
          pictures: data[1].map((picture) => picture.link),
        });
        setIsLoading(false);
      } catch (err) {
        console.log(err.meessage);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div className="h-screen">
          <Loader />
        </div>
      ) : (
        <>
          {resortData ? (
            <>
              <div className="w-full h-[50vh] relative">
                <img
                  src={resortData?.image}
                  alt=""
                  className="-z-10 w-full h-full object-cover "
                />
              </div>
              <main className="flex flex-col gap-10 w-full h-full px-24 ">
                <ResortHeader resortData={resortData} />
                <Divider />
                <ResortDetails resortData={resortData} />
                <Divider />
                <ResortMoreToDo resortData={resortData} />
                <Divider />
                <ResortPicturesInfo resortData={resortData} />
                <ResortMoreResorts resortData={resortData} />
              </main>
              <Footer />
            </>
          ) : (
            <ResortNotFound />
          )}
        </>
      )}
    </>
  );
};

export default ResortPage;
