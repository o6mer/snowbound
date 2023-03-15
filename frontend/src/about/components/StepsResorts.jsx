import React, { useEffect, useLayoutEffect, useRef } from "react";
import stepsSection1 from "../../assets/stepsSection.jpg";
import step1 from "../../assets/step1.jpg";
import step2 from "../../assets/step2.jpg";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import SleddingOutlinedIcon from "@mui/icons-material/SleddingOutlined";
import SevereColdOutlinedIcon from "@mui/icons-material/SevereColdOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const StepsResorts = () => {
  const ref = useRef();
  const startedAnimation = () => {
    gsap.fromTo(
      document.querySelector(".header-para"),
      {
        opacity: 0,
        x: 150,
      },
      {
        duration: 1.5,
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".header",
          start: "top center+=130",
          markers: true,
        },
      }
    );
    gsap.fromTo(
      ".img-1",
      {
        opacity: 0,
        y: 150,
      },
      {
        duration: 1.5,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".header",
          start: "top center+=130",
        },
      }
    );
    gsap.fromTo(
      ".img-2",
      {
        opacity: 0,
        y: -150,
      },
      {
        duration: 1.5,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".header",
          start: "top center+=130",
          // scrub: true,
        },
      }
    );
    // ScrollTrigger.refresh()
  };

  const stepsAnimation = () => {
    gsap.fromTo(
      ".div-3",
      {
        opacity: 0,
        x: 200,
      },
      {
        duration: 1.5,
        x: 0,

        opacity: 1,
        scrollTrigger: {
          trigger: ".header",
          start: " top bottom",
          // markers: true,
          // scrub: true,
        },
      }
    );
  };

  const paraStepsAnimation =()=>{
    const boxes = gsap.utils.toArray('.rightPara');
    boxes.forEach(box => {
      gsap.fromTo(box,{
        opacity:0,
        y:200
      }, {
        y: 0,
        duration:1.2,
        opacity:1,
        scrollTrigger: {
          trigger: box,
          start:"top bottom-=45",
          markers: true,
          // scrub: true
        }
      })
    });

  }

  useEffect(() => {
    // setTimeout(()=>{
    if (ref.current) {
      startedAnimation();
      stepsAnimation();
      paraStepsAnimation()
    }

    // },10)
    // ScrollTrigger.refresh()
    // startedAnimation();
    // }
  }, []);

  return (
    <>
      <section ref={ref} className="header bg-white dark:bg-gray-900 lg:py-[5vw]">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 flex flex-col-reverse ">
          <div className="grid grid-cols-2 gap-4 mt-8 px-10 md:px-0">
            <img
              className="w-full h-full object-cover rounded-lg img-1"
              src={step1}
              alt="office content 1"
            />
            <img
              className="mt-4 w-full h-full lg:mt-10 rounded-lg object-cover img-2"
              src={step2}
              alt="office content 2"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mt-12 header-para">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              How to get started
            </h2>
            <p className="mb-4">
              Choosing the right ski resort can make all the difference when it
              comes to enjoying a winter vacation on the slopes. With so many
              options to choose from, it can be overwhelming to decide which one
              to pick.
            </p>
            <p>
              However, by following a few simple steps, you can narrow down your
              choices and find the perfect ski resort for your needs.
            </p>
          </div>
        </div>
      </section>

      <div className="container steps my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 ">
          <div className="flex flex-wrap items-center p-10">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6 mb-12 ">
              <div className="rightPara flex mb-10">
                <div className="shrink-0">
                  <div
                    className="p-4 rounded-md shadow-lg"
                    style={{
                      backgroundColor: "black",
                    }}
                  >
                    <EmojiEventsOutlinedIcon
                      fontSize="medium"
                      sx={{ color: "white" }}
                    />
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">Determine Your Skill Level</p>
                  <p className="text-gray-500">
                    Choose a resort that matches your abilities. This will
                    ensure that you can safely and comfortably enjoy the slopes
                    without being overwhelmed or bored.
                  </p>
                </div>
              </div>

              <div className="rightPara flex mb-10">
                <div className="shrink-0">
                  <div
                    className="p-4 rounded-md shadow-lg"
                    style={{ backgroundColor: "black" }}
                  >
                    <SavingsOutlinedIcon sx={{ color: "white" }} />
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">Consider Your Budget</p>
                  <p className="text-gray-500">
                    Ski resorts can vary greatly in price, so it's important to
                    factor in the cost of travel, lodging, lift tickets, and
                    other expenses. Some resorts offer all-inclusive packages
                    that include meals, equipment rentals, and other amenities,
                    while others offer more basic amenities at a lower price.
                  </p>
                </div>
              </div>

              <div className="rightPara flex mb-10">
                <div className="shrink-0">
                  <div
                    className="p-4 rounded-md shadow-lg"
                    style={{ backgroundColor: "black" }}
                  >
                    <SleddingOutlinedIcon sx={{ color: "white" }} />
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">Look for Amenities</p>
                  <p className="text-gray-500">
                    Look for a resort that has amenities that appeal to you and
                    your family, such as on-site spas, fitness centers,
                    restaurants, or activities like snowshoeing, ice skating, or
                    sledding.
                  </p>
                </div>
              </div>

              <div className="rightPara flex mb-10 ">
                <div className="shrink-0">
                  <div
                    className="p-4 rounded-md shadow-lg"
                    style={{ backgroundColor: "black" }}
                  >
                    <SevereColdOutlinedIcon sx={{ color: "white" }} />
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">Check the Snow Conditions</p>
                  <p className="text-gray-500">
                    The quality of the snow can make or break a ski vacation, so
                    it's important to check the snow conditions before choosing
                    a resort. Some resorts are known for their consistently good
                    snow conditions, while others may have variable conditions
                    depending on the weather.
                  </p>
                </div>
              </div>
              <div className="rightPara flex">
                <div className="shrink-0">
                  <div
                    className="p-4 rounded-md shadow-lg"
                    style={{ backgroundColor: "black" }}
                  >
                    <ChatOutlinedIcon sx={{ color: "white" }} />
                  </div>
                </div>
                <div className="grow ml-4">
                  <p className="font-bold mb-1">Read Reviews</p>
                  <p className="text-gray-500">
                    reading reviews from other skiers who have visited the
                    resort can provide valuable insight into the overall
                    experience. Pay attention to comments about the quality of
                    the slopes, amenities, and the overall experience at the
                    resort.
                  </p>
                </div>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6 ">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg div-3"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                style={{ backgroundPosition: "50%" }}
              >
                <img
                  className="w-full object-cover img-3"
                  src={stepsSection1}
                  //   className="w-full"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StepsResorts;
