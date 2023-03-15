import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../general/Loader";
import RecomendedResorts from "../../general/RecomendedResorts";
import Carousel from "react-grid-carousel";
import { Divider } from "@mui/material";

const UserFavorites = ({ favorites }) => {
  const [resorts, setResorts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const { data } = await axios.post(
          `http://localhost:8000/api/resort/compare`,
          { names: favorites }
        );
        console.log(data.resort);
        setResorts(data.resort);
        console.log(resorts);
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
          <section section className="z-10 ml-80">
            <p className="text-center text-2xl font-bold">
              Your faviotes resorts
            </p>
            <Carousel
              cols={5}
              rows={1}
              gap={10}
              loop 
              hideArrow={resorts?.length <= 4}
              responsiveLayout={[
                {
                  breakpoint: 900,
                  cols: 3,
                },
                {
                  breakpoint: 500,
                  cols: 2,
                },
              ]}
            >
              {resorts?.map((resort) => (
                <Carousel.Item>
                  <RecomendedResorts
                    resortData={resort}
                    key={`${resort?.name}from${resort?.country}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </section>
        </>
      ) : null}
    </>
  );
};

export default UserFavorites;
