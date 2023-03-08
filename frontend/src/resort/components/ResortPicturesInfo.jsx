import React from "react";
import { Carousel } from "react-responsive-carousel";

const ResortPicturesInfo = ({ resortData }) => {
  return (
    <section className="w-full flex gap-8">
      <Carousel
        className="max-w-[40%]"
        showArrows
        showStatus
        showIndicators
        infiniteLoop
        showThumbs
        autoPlay
        swipeable
      >
        {resortData?.pictures?.map((picture) => (
          <img key={picture} src={picture} />
        ))}
      </Carousel>
      <div>
        <p>{resortData?.exstraDetails}</p>
      </div>
    </section>
  );
};

export default ResortPicturesInfo;
