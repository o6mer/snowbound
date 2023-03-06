import React from "react";

const ResortHeader = ({ resortData }) => {
  return (
    <section className="flex justify-between items-center py-12">
      <div className="flex flex-col max-w-[60%] justify-between">
        <header className="text-4xl font-bold">{resortData?.name}</header>
        <p className="text-xl">{resortData?.description}</p>
      </div>
      <iframe
        width="560"
        height="315"
        src="//www.youtube.com/embed/EmwRY2ZVwwk?rel=0;autoplay=1"
      ></iframe>
    </section>
  );
};

export default ResortHeader;
