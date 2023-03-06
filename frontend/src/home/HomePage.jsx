import React from "react";
import Footer from "../general/Footer";
import Navbar from "../general/Navbar";
import HomeHero from "./Components/HomeHero";
import RecomendedResorts from "./Components/RecomendedResorts";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <HomeHero />
      <h1
        id="recomendedResorts"
        className="mb-4 text-2xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-orange-400">
          Recomended resorts
        </span>{" "}
      </h1>

      <div className="md:flex">
        <RecomendedResorts resortImage={"./src/assets/resort.jpg"} />
        <RecomendedResorts resortImage={"./src/assets/resort.jpg"} />
        <RecomendedResorts resortImage={"./src/assets/resort.jpg"} />
      </div>
      <div className="md:flex">
        <RecomendedResorts resortImage={"./src/assets/resort.jpg"} />
        <RecomendedResorts resortImage={"./src/assets/resort.jpg"} />
        <RecomendedResorts resortImage={"./src/assets/resort.jpg"} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
