import { Divider } from '@mui/material';
import React from 'react'
import Navbar from '../general/Navbar';
import { useState } from 'react';
import Footer from '../general/Footer';
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useParams } from 'react-router-dom';
const ProfilePage = () => {
 const [show, setShow] = useState(false);
 const {user}=useParams();
 console.log(show);
    return (
      <div>
        <Navbar />
        <Divider />
        <div className="p-16">
          <div className="p-8 bg-white shadow-2xl mt-16">
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {" "}
              <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                {" "}
                <div>
                  {" "}
                  <p className="font-bold text-gray-700 text-xl">22</p>{" "}
                  <p className="text-gray-400">Friends</p>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <p className="font-bold text-gray-700 text-xl">10</p>{" "}
                  <p className="text-gray-400">Photos</p>{" "}
                </div>{" "}
                <div>
                  {" "}
                  <p className="font-bold text-gray-700 text-xl">89</p>{" "}
                  <p className="text-gray-400">Reviews</p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="relative">
                {" "}
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {" "}
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>{" "}
                </div>{" "}
              </div>{" "}
              <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                <button className="absolute  right-20 justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded-md shadow-md md:w-auto   text-white bg-sky-400 hover:bg-sky-500 focus:shadow-outline focus:outline-none">
                  <EditIcon /> Edit
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div className="mt-20 text-center border-b pb-12">
              {" "}
              <h1 className="text-4xl font-medium text-gray-700">
                user user,{" "}
                <span className="font-light text-gray-500">27</span>
              </h1>{" "}
              <p className="font-light text-gray-600 mt-3">
                Israel, Jerusalem
              </p>{" "}
              <p className="mt-8 text-gray-500">
                Solution Manager - Creative Tim Officer
              </p>{" "}
              <p className="mt-2 text-gray-500">
                University of Computer Science
              </p>{" "}
             
            </div>{" "}
            <p className="flex justify-center text-2xl	font-semibold">Your reviews</p>
            <div className="mt-6 flex flex-col justify-center">
              <p className="bg-gray-100 text-center font-light lg:px-16 rounded-md ">
               
            <div class="flex items-center">
    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
                An artist of considerable range, Ryan — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
                
              </p>
              {show && <p>all other reviews</p>}
              <button
                className="text-indigo-500 py-2 px-4  font-medium mt-4 hover:text-indigo-800 "
                onClick={() => setShow(!show)}
              >
                {" "}
                {show ? <div> Show less</div> : <div> Show more</div>}
              </button>{" "}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
}

export default ProfilePage