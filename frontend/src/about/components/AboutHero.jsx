import React, { useEffect } from "react";
import aboutHero from "../../assets/AboutHero.jpg";
import aboutHero2 from "../../assets/HeroSearch1.jpg";
import mainSection from "../../assets/mainSection.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutHero = () => {
  gsap.registerPlugin(ScrollTrigger);

  const aboutAnimation = () => {
    gsap.fromTo(
      ".about-img",
      {
        opacity: 0,
        x: "50%",
      },
      {
        duration: 1.5,
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".hey",
          start: "top center+=130",
        },
      }
    );
    gsap.fromTo(
      ".about-para",
      {
        opacity: 0,
        x: "-50%",
      },
      {
        duration: 1.5,
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".hey",
          start: "top center+=130",
        },
      }
    );
  };

  useEffect(() => {
    aboutAnimation();
  }, []);

  return (
    <>
      <div className="relative h-[70vh]">
        <div className="absolute top-0 left-0 -z-10 w-full h-full ">
          <img className="object-cover w-full h-full" src={aboutHero} alt="" />
        </div>
        <div className="w-full h-full text-xl flex flex-col justify-center text-white bg-black bg-opacity-[0.50]">
          <h1 className="text-center text-5xl font-semibold ">
            Why SnowBound?
          </h1>
        </div>
      </div>
      <div className="container hey my-24 px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section className="mb-32 text-gray-800">
          {/* <!-- Jumbotron --> */}
          <div className="container mx-auto xl:px-32 text-center lg:text-left">
            <div className="grid lg:grid-cols-2 flex items-center">
              <div className="mb-12 lg:mb-0 about-para">
                <div
                  className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                  style={{
                    background: " hsla(0, 0%, 100%, 0.90)",
                  }}
                >
                  <h2 className="text-3xl font-bold mb-6">Enjoy the moment</h2>
                  <p className="text-gray-500 mb-6 pb-2 lg:pb-0">
                    Our goal is to help you find the best ski resorts to meet
                    your skiing needs. Whether you're a beginner looking for
                    gentle slopes or an expert seeking challenging terrain,
                    we've got you covered.
                  </p>

                  <p className="text-gray-500 mb-0">
                    We understand that choosing the right ski resort can be
                    overwhelming, which is why we provide you with the tools and
                    information to make an informed decision. Our team of skiing
                    enthusiasts has personally visited many ski resorts and can
                    offer insider tips and recommendations to ensure your ski
                    vacation is a success. We also keep up-to-date with the
                    latest snow reports, weather forecasts, and resort news to
                    provide you with the most current information. Let us help
                    you plan your next skiing adventure and discover the best
                    ski resorts for you.
                  </p>
                </div>
              </div>

              <div className="relative -z-10 h-screen about-img ">
                <img
                  src={mainSection}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* <!-- Jumbotron --> */}
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
    </>
  );
};

export default AboutHero;
