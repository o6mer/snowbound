import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import SnowboardingIcon from "@mui/icons-material/Snowboarding";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-gray-800 fixed top-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <NavLink to="/HomePage" className="text-blue-600 font-large">
                  SnowBound
                  <SnowboardingIcon color="primary" sx={{ fontSize: 30 }} />
                </NavLink>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/search/:query"
                    className="text-gray-300 hover:bg-gray-700 
                    hover:text-white
                    focus:bg-gray-700
                   focus:outline-none focus:ring focus:ring-white-300  px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Country 1
                  </NavLink>
                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring focus:ring-white-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Country 1
                  </NavLink>

                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 focus:bg-gray-700 hover:text-white focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Country 1
                  </NavLink>

                  <NavLink
                    to="/Login"
                    className="absolute  right-2 text-gray-300 hover:bg-gray-700 focus:bg-gray-700 hover:text-white focus:outline-none focus:ring focus:ring-white-300 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    LogIn
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  to="/"
                  className="hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:ring focus:ring-white-300 text-white  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Country 1
                </NavLink>

                <NavLink
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 focus:bg-gray-700 hover:text-white focus:outline-none focus:ring focus:ring-white-300 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Country 1
                </NavLink>

                <NavLink
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700  focus:outline-none focus:ring focus:ring-white-300 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Country 1
                </NavLink>

                <NavLink
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:outline-none focus:ring focus:ring-white-300 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Log In
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}

export default Navbar;
