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
        )) || (
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/211218043659-06-best-ski-resorts-restricted.jpg?q=h_2000,w_3000,x_0,y_0" />
        )}
      </Carousel>
      <div>
        <p>{resortData?.exstraDetails}</p>
      </div>
    </section>
  );
};

export default ResortPicturesInfo;
