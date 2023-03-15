import React from "react";
import FavoriteButton from "./FavoriteButton.jsx";

const RecomendedResorts = ({ resortData }) => {
  return (
    <div id="recomendedImg" className={`w-full m-10 antialiased text-gray-900`}>
      <div>
        <img
          src={resortData?.image}
          alt=" random imgee"
          className=" m-auto w-full h-44 object-cover object-center rounded-lg shadow-md"
        />

        <div className="">
          <div className="relative px-4 -mt-16">
            <div className="flex items-center flex-col w-full bg-white p-6 rounded-lg shadow-lg text-center transition ease-in-out delay-150  hover:scale-100 duration-300">
              <div className="flex items-baseline w-full">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider ">
                  {resortData?.country_id} &bull; {resortData?.siteHeight}m
                  &bull;{" "}
                  {[...Array(resortData?.price)].map((n, i) => (
                    <span key={i}>$</span>
                  ))}
                </div>
                <FavoriteButton resortData={resortData} />
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                {resortData?.name}
              </h4>

              <div className="mt-1 line-clamp-2">
                {resortData?.description}$
              </div>
              <a
                className="mt-4 rounded-lg  p-2 bg-teal-200 hover:bg-teal-400 transition-all w-max "
                href={`/resort/${resortData?.name}`}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecomendedResorts;
