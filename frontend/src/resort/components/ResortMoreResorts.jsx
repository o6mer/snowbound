import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../general/Loader";
import RecomendedResorts from "../../home/Components/RecomendedResorts";
import Carousel from "react-grid-carousel";
import { Divider } from "@mui/material";

const ResortMoreResorts = ({ resortData }) => {
  const [resorts, setResorts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (!resortData) return;

        const { data } = await axios.get(
          `http://localhost:8000/api/resort/find/country/${resortData?.country_id}`
        );
        console.log("moreeeee:", data);
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
          <section section className="">
            <p className="text-center text-2xl font-bold">
              More From {resortData?.country_id}
            </p>
            <Carousel
              cols={4}
              rows={1}
              gap={10}
              loop
              hideArrow={resorts?.length <= 4}
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

export default ResortMoreResorts;
