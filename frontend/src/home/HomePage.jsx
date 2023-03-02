import React from "react";
import Navbar from "../general/Navbar";
import HomeHero from "./Components/HomeHero";
import RecomendedResorts from "./Components/RecomendedResorts";

const HomePage = () => {
  return (
    <div className="w-full h-full	">
      <Navbar />
      <HomeHero />
      <div style={{ display: "flex" }}>
      <RecomendedResorts place={"start"} />
      <RecomendedResorts place={"center"} />
      <RecomendedResorts place={"end"} />
      </div>
      <div style={{ display: "flex" }}>
      <RecomendedResorts place={"start"} />
      <RecomendedResorts place={"center"} />
      <RecomendedResorts place={"end"} />
      </div>
    </div>
  );
};

export default HomePage;
