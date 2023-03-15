import { React, useState } from "react";
import CompareModal from "../../general/Modals/CompareModal";
import FindModal from "../../general/Modals/FindModal";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import FormModal from "../../general/Modals/FormModal.jsx";
const HomeHero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [compareModalOpen, setcompareModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleOpencompareModal = () => {
    setcompareModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClosecompareModal = () => {
    setcompareModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className={`relative bg-[url('./assets/HeroHome.jpg')]  bg-cover bg-[0px_-100px] bg-no-repeat  flex justify-center items-center`}
    >
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h1 className="mb-4 text-3xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Welcome to SnowBound
            </span>{" "}
          </h1>
          <SearchBar />
          <input
            placeholder="Comapre"
            required
            type="text"
            className="flex-grow  h-12 px-4 mb-3 bg-white opacity-80 transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline"
            onClick={handleOpenModal}
          />
          <CompareModal open={modalOpen} onClose={handleCloseModal} />
          <input
            placeholder="Find"
            required
            type="text"
            className="flex-grow h-12 px-4 mb-3 bg-white opacity-80 transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline"
            onClick={handleOpencompareModal}
          />
          <FindModal
            open={compareModalOpen}
            onClose={handleClosecompareModal}
          />
          <br />
          <FormModal/>
          <a
            href="#recomendedResorts"
            aria-label="Scroll down"
            className="flex items-center justify-center animate-bounce my-10	 bg-blue-500 hover:bg-blue-700 w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
