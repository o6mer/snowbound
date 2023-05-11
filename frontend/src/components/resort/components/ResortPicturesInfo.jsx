import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ResortReviews from "./ResortReviews";

const ResortPicturesInfo = ({ resortData }) => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-8">
      <Carousel
        className="max-w-full md:max-w-[40%]"
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
      <ResortReviews resortData={resortData} />
    </section>
  );
};

export default ResortPicturesInfo;
