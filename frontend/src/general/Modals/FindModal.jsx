import React from "react";
import { useEffect,useState } from "react";
import "./Modal.css"
export default function FindModal(props) {
  if (!props.open) {
    return null;
  }
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 modal animated 
      ${props.open ? 'fadeIn' : 'fadeOut faster'}  shadow-2xl`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="px-4 pt-5 pb-4 overflow-hidden transform transition-all sm:max-w-lg sm:w-full">
          <main
            id="content"
            role="main"
            className="w-full max-w-md mx-auto p-6"
          >
            <div className="mt-7 bg-white  rounded-2xl shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <div className="flex justify-end">
                    <button
                      onClick={props.onClose}
                      className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    {" "}
                    Find your vecation
                  </h1>
                </div>

                <div className="mt-5">
                  <form>
                    <div className="grid gap-y-4">
                      <div>
                        <div className="relative">
                          <input
                            placeholder="Continent"
                            className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                            required
                          />
                          <input
                            placeholder="Country"
                            className="mt-4 py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                            required
                          />
                          <input
                            placeholder="Resort"
                            className="mt-4 py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                            required
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      >
                        Find
                      </button>
                    </div>

                    <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
                      <a
                        className="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
                        href="#"
                        target="_blank"
                      >
                        Need help?
                      </a>
                      <a
                        className="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
                        href="#"
                      >
                        Contact us!
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
