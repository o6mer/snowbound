import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../general/Loader";
import RecomendedResorts from "../../home/Components/RecomendedResorts";
import Carousel from "react-grid-carousel";

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
        setResorts([...data]);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <Carousel cols={4} rows={1} gap={10} loop>
          {resorts
            ?.filter((resort) => resort.name !== resortData.name)
            ?.map((resort) => (
              <Carousel.Item>
                <RecomendedResorts
                  resortData={resort}
                  key={`${resort?.name}from${resort?.country}`}
                />
              </Carousel.Item>
            ))}
        </Carousel>
      )}
    </section>
  );
};

export default ResortMoreResorts;
