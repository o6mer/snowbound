import React from "react";
import CustomizedBreadcrumbs from "../../general/CustomizedBreadcrumbs";
import FavoriteButton from "../../general/FavoriteButton.jsx";
const ResortHeader = ({ resortData }) => {
  return (
    <section className={`flex flex-col justify-between gap-4`}>
      <div className="flex ">
        <CustomizedBreadcrumbs
          continent={resortData?.continent_id}
          country={resortData?.country_id}
          resort={resortData?.name}
        />
        <FavoriteButton resortData={resortData} />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 h-full">
        <div className="flex flex-col md:max-w-[60%] gap-2   md:gap-10 justify-between">
          <header className="text-4xl font-bold py-4 ">
            {resortData?.name}
          </header>
          <p className="text-xl">{resortData?.description}</p>
        </div>

        <div className="flex flex-col items-center-center grow h-full">
          <p className="text-center text-lg font-bold">Live Cam</p>
          <iframe
            className="rounded-lg flex flex-grow h-[40vh]"
            src={resortData?.livecam}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ResortHeader;
