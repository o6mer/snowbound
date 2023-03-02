import React from "react";

const ResortHeader = ({ resortData }) => {
  return (
    <section className="flex justify-between items-center p-12">
      <div className="flex flex-col max-w-[60%] justify-between">
        <header className="text-4xl font-bold">{resortData?.name}</header>
        <p className="text-xl">{resortData?.description}</p>
      </div>
      <iframe
        className="w-full"
        src="https://appskimtn.com/live-cams"
        frameBorder="0"
        alt="iframe"
      ></iframe>
    </section>
  );
};

export default ResortHeader;
