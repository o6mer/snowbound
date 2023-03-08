import React from "react";
import Footer from "../general/Footer";
import Navbar from "../general/Navbar";
import HomeHero from "./Components/HomeHero";
import { useParams, Link } from "react-router-dom";
import RecomendedResorts from "../general/RecomendedResorts";
import { useEffect, useState } from "react";
import axios from "axios";
const HomePage = () => {
  const [resortData, setResortData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { continent, country, resort } = useParams();

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
  }, []);
  return (
    <div className="w-full h-full">
      <Navbar />
      <HomeHero />
      <h1
        id="recomendedResorts"
        className="mb-4 text-2xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-black">
          Recomended resorts
        </span>{" "}
      </h1>
      <div className=" gap-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {resortData?.map((resort) => (
          <RecomendedResorts resortData={resort} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
