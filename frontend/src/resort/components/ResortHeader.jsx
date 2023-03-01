import React from "react";

const ResortHeader = ({ resortData }) => {
  return (
    <section className="flex justify-between">
      <div className="flex flex-col">
        <header>{resortData?.name}</header>
        <p>{resortData?.description}</p>
      </div>
      <iframe src={resortData.liveCam} frameBorder="0" alt="iframe"></iframe>
    </section>
  );
};

export default ResortHeader;
