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
import { useAuth } from "../hooks/useAuth";

const ResortPage = () => {
  const [resortData, setResortData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { name } = useParams();

  useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const transFormedName = name.charAt(0).toUpperCase() + name.slice(1);

        const { data } = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/resort/find/${transFormedName}`
        );

        if (!data.resort || !data.images) return setIsLoading(false);

        console.log(data);

        setResortData({
          ...data.resort,
          images: data.images.map((picture) => picture.link),
          reviews: [...data.reviews],
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
              <main className="flex flex-col gap-10 w-full h-full px-12 md:px-24 ">
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
