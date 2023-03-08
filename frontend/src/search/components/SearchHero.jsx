import {React,useState} from 'react'
import FindModal from '../../general/Modals/FindModal';

const SearchHero = () => {
     const [modalOpen, setModalOpen] = useState(false);
const handleOpenModal = () => {
  setModalOpen(true);
  document.body.style.overflow = "hidden";
};

const handleCloseModal = () => {
  setModalOpen(false);
  document.body.style.overflow = "auto";
};
  return (
    <header className="w-full h-96  bg-[url('./assets/HeroSearch1.jpg')] bg-cover bg-[0px_-100px] bg-no-repeat  flex justify-center items-center">
      <div className="flex flex-col  justify-center items-center ">
        <h1 className=" text-center text-4xl text-white font-bold drop-shadow-xl">
          Here you can search for your the
          <br /> best vecation that suits for you
          <br />
          <span className="text-blue-500">Feel free</span>
        </h1>
        <p className="mt-5 text-center text-xl font-semibold	text-sky-600">
          Please choose the country you want to visit
        </p>
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
             
            </div>
            <input
              placeholder="Search"
              required
              type="text"
              className="flex-grow  h-12 px-4 mb-3 bg-white opacity-80 transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline"
              onClick={handleOpenModal}
            />
            <FindModal
              open={modalOpen}
              onClose={handleCloseModal}
            ></FindModal>
          </div>
          <button
            type="button"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
    </header>
  );
}

export default SearchHero