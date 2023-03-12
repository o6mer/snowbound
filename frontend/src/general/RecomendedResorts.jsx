import React from "react";

const RecomendedResorts = ({ resortData }) => {
  return (
    <div
      id="recomendedImg"
      className={`max-w-md w-full m-10 antialiased text-gray-900`}
    >
      <div>
        <img
          src={resortData?.image}
          alt=" random imgee"
          className="w-96 h-44 object-cover object-center rounded-lg shadow-md"
        />

        <a href={`/resort/${resortData?.name}`}>
          <div className="relative px-4 -mt-16 ">
            <button className="w-full bg-white p-6 rounded-lg shadow-lg  transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-100 duration-300">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider ">
                  {resortData?.country_id} &bull; {resortData?.siteHeight}m
                  &bull;{" "}
                  {[...Array(resortData?.price)].map((n) => (
                    <span>$</span>
                  ))}
                </div>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                {resortData?.name}
              </h4>

              <div className="mt-1 line-clamp-2">
                {resortData?.description}$
              </div>
              <button className="mt-4 rounded-lg  p-2 bg-slate-100">
                Learn More
              </button>
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default RecomendedResorts;
