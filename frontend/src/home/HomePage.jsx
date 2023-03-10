import React, { useContext } from "react";
import Footer from "../general/Footer";
import Navbar from "../general/Navbar";
import HomeHero from "./Components/HomeHero";
import { useParams, Link } from "react-router-dom";
import RecomendedResorts from "../general/RecomendedResorts";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../general/Loader";
import ResortNotFound from "../resort/components/ResortNotFound";
import { useAuth } from "../hooks/useAuth";
import { UserContext } from "../contexts/UserContextProvider";
const HomePage = () => {
  const { user } = useContext(UserContext);
  // user && console.log(user);
  const [resortData, setResortData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { continent, country, resort } = useParams();

  useAuth();

  useEffect(() => {
    console.log(country);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/resort/get`
        );

        if (!data) return;
        setIsLoading(false);
        console.log(data);
        setResortData(data);
      } catch (err) {
        console.log(err.meessage);
        setIsLoading(false);
      }
    };
    fetchData();
    console.log(resortData);
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
              <HomeHero />
              <h1
                id="recomendedResorts"
                className="mb-4 text-2xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-black">
                  Recomended resorts
                </span>{" "}
              </h1>
              <div className="  grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 content-center">
                {resortData?.map((resort) => (
                  <RecomendedResorts resortData={resort} />
                ))}
              </div>
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

export default HomePage;
