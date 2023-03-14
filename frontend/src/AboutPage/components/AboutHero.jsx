import React from "react";
import aboutHero from "../../assets/AboutHero.jpg";
import aboutHero2 from "../../assets/HeroSearch1.jpg";
import mainSection from "../../assets/mainSection.jpg";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";


const AboutHero = () => {
  gsap.registerPlugin(
      ScrollTrigger,

  );

  // gsap.plugins(Scrol)
  gsap.to(".hey", {
    scrollTrigger: ".hey", // start the animation when ".box" enters the viewport (once)
    x: 500,
    start: "top center"
  });
  return (
    <>
      <div className="relative h-[60vh]">
        <div className="absolute top-0 left-0 -z-10 w-full h-full ">
          <img className="object-cover w-full h-full" src={aboutHero} alt="" />
        </div>
        <div className="w-full h-full text-xl flex flex-col justify-center text-white bg-black bg-opacity-[0.50]">
          <h1 className="text-center text-5xl font-semibold">Why SnowBound?</h1>
        </div>
      </div>
      <div className="container hey my-24 px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section className="mb-32 text-gray-800">
          {/* <!-- Jumbotron --> */}
          <div className="container mx-auto xl:px-32 text-center lg:text-left">
            <div className="grid lg:grid-cols-2 flex items-center">
              <div className="mb-12 lg:mb-0">
                <div
                  className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                  style={{
                    background: " hsla(0, 0%, 100%, 0.55)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <h2 className="text-3xl font-bold mb-6">Enjoy the moment</h2>
                  <p className="text-gray-500 mb-6 pb-2 lg:pb-0">
                    Our goal is to help you find the best ski resorts to meet
                    your skiing needs. Whether you're a beginner looking for
                    gentle slopes or an expert seeking challenging terrain,
                    we've got you covered.
                  </p>

                  {/* <div className="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
                    <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        ></path>
                      </svg>
                      Best team
                    </p>

                    <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        ></path>
                      </svg>
                      Best quality
                    </p>

                    <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        ></path>
                      </svg>
                      Best experience
                    </p>
                  </div> */}

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

              <div className="h-screen">
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

      {/* <div className="flex p-[5vw] ">
        <div className="p-5">
          <h1 className="text-3xl font-bold mb-3 ">About Us</h1>
          <p className="text-lg line">
            Our goal is to help you find the best ski resorts to meet your
            skiing needs. Whether you're a beginner looking for gentle slopes or
            an expert seeking challenging terrain, we've got you covered. We
            understand that choosing the right ski resort can be overwhelming,
            which is why we provide you with the tools and information to make
            an informed decision. Our team of skiing enthusiasts has personally
            visited many ski resorts and can offer insider tips and
            recommendations to ensure your ski vacation is a success. We also
            keep up-to-date with the latest snow reports, weather forecasts, and
            resort news to provide you with the most current information. Let us
            help you plan your next skiing adventure and discover the best ski
            resorts for you.
          </p>
        </div>
        <div className="p-5">
          <img className="w-full h-full object-cover" src={aboutHero2} alt="" />
        </div>
      </div> */}
    </>
  );
};

export default AboutHero;
