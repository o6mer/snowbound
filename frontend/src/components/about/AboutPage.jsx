import React from "react";
import Footer from "../general/Footer";
import Navbar from "../general/Navbar";
import AboutHero from "./components/AboutHero";
import StepsResorts from "./components/StepsResorts";

const AboutPage = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <StepsResorts />
      <Footer />
    </main>
  );
};
export default AboutPage;
