import React from "react";
import stepsSection1 from "../../assets/stepsSection.jpg";
import step1 from "../../assets/step1.jpg";
import step2 from "../../assets/step2.jpg";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import SleddingOutlinedIcon from "@mui/icons-material/SleddingOutlined";
import SevereColdOutlinedIcon from "@mui/icons-material/SevereColdOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
const StepsResorts = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 flex flex-col-reverse">
          <div className="grid grid-cols-2 gap-4 mt-8 px-10 md:px-0">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={step1}
              alt="office content 1"
            />
            <img
              className="mt-4 w-full h-full lg:mt-10 rounded-lg object-cover"
              src={step2}
              alt="office content 2"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mt-12">
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

      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="flex flex-wrap items-center p-10">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6 mb-12 ">
              <div className="flex mb-10">
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
                    {/* <svg
                      className="w-5 h-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                      ></path>
                    </svg> */}
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

              <div className="flex mb-10">
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

              <div className="flex mb-10">
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

              <div className="flex mb-10 ">
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
              <div className="flex">
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
                className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                style={{ backgroundPosition: "50%" }}
              >
                <img
                  className="w-full object-cover"
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
