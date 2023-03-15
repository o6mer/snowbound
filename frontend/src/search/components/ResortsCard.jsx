import React from 'react'
import FavoriteButton from "../../general/FavoriteButton"
import {useEffect,useRef} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ResortsCard = ({resort}) => {
  const paraStepsAnimation =()=>{
    let boxes = gsap.utils.toArray('.card');
    boxes.shift()
    boxes.forEach(box => {
      gsap.fromTo(box,{
        opacity:0,
        y:80
      }, {
        y: 0,

        duration:1,
        opacity:1,
        scrollTrigger: {
          trigger: box,
          immdediateRender:false,
          markers: true,
        }
      })
    });

  }
  const ref=useRef()
  useEffect(()=>{
    if (ref.current){

      paraStepsAnimation()
    }
  },[])
  return (
    <div ref={ref} className="    flex flex-col h-50 my-5 card	 drop-shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300">
      <div className="relative  flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
        <div className="w-full md:w-1/3 bg-white grid place-items-center ">
          <img src={resort.image} alt="resort " className="rounded-xl h-56 " />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="flex justify-between item-center">
            <p className="text-gray-500 font-medium hidden md:block">
            {resort?.country_id}
            </p>
            <div className="flex items-center">

              {resort.avg_rating&&
                  <>

                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p className="text-gray-600 font-bold text-sm ml-1">
                    {`${resort.avg_rating?.toFixed(1)} `}
                    <span className="text-gray-500 font-normal">{`Reviews (${resort?.review_amount?resort?.review_amount:"0"})`}</span>
                  </p>
                  </>
              }
            </div>
            <div >
              <FavoriteButton resortData={resort}/>

            </div>
          </div>
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            {resort?.name}
          </h3>
          <p className="md:text-lg text-gray-500 text-base">
            {resort?.description}
          </p>
          <p className="text-xl font-black text-gray-800">
            ${resort?.skiPass}
            <span className="font-normal text-gray-600 text-base">
              /Ski pass per day
            </span>
            <a href={`/resort/${resort.name}`} className="absolute  right-8 bg-teal-200 hover:bg-teal-400 px-4 py-2 rounded-full text-xs font-medium text-gray-800   ">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResortsCard