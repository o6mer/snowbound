import React from "react";
import Footer from "../general/Footer";
import Navbar from "../general/Navbar";
import AboutHero from "./components/AboutHero";
import StepsResorts from "./components/StepsResorts";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <StepsResorts />
      <Footer />
    </>
  );
};
export default AboutPage;
