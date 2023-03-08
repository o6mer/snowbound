import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
        {resortData?.images?.map((picture) => (
          <img
            key={picture}
            src={picture}
            className="max-h-[50vh] object-cover"
          />
        ))}
      </Carousel>
      <div>
        <p>{resortData?.exstraDetails}</p>
      </div>
    </section>
  );
};

export default ResortPicturesInfo;
