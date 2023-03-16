import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../general/Loader";
import RecomendedResorts from "../../general/RecomendedResorts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 769 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 769, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ResortMoreResorts = ({ resortData }) => {
  const [resorts, setResorts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (!resortData) return;

        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/resort/find/country/${
            resortData?.country_id
          }`
        );
        setResorts([
          ...data?.filter((resort) => resort.name !== resortData.name),
        ]);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : resorts?.length ? (
        <>
          <Divider />
          <section className="more-resorts">
            <p className="text-center text-2xl font-bold">
              More From {resortData?.country_id}
            </p>
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsive}
              keyBoardControl={true}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {resorts?.map((resort) => (
                <RecomendedResorts
                  resortData={resort}
                  key={`${resort?.name}from${resort?.country}`}
                />
              ))}
            </Carousel>
          </section>
        </>
      ) : null}
    </>
  );
};

export default ResortMoreResorts;
