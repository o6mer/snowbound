import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../general/Navbar";
import CustomizedBreadcrumbs from "../general/CustomizedBreadcrumbs";
import ResortsCard from "./components/ResortsCard";
import SearchHero from "./components/SearchHero";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../general/Footer";
import Loader from "../general/Loader";
import ResortNotFound from "../resort/components/ResortNotFound";
import { useAuth } from "../hooks/useAuth";
const SearchPage = () => {
  const [resortData, setResortData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { continent, country, resort } = useParams();

  useAuth();

  useEffect(() => {
    console.log(country);
    const fetchData = async () => {
      setIsLoading(true);
      if (resort === "none") {
        try {
          const { data } = await axios.get(
            `http://localhost:8000/api/resort/find/country/${country}`
          );
          if (!data) return;
          setIsLoading(false);
          console.log(data);
          setResortData(data);
        } catch (err) {
          console.log(err.meessage);
          setIsLoading(false);
        }
      } else {
        try {
          const { data } = await axios.get(
            `http://localhost:8000/api/resort/find/${resort}`
          );
          if (!data) return;

          console.log(data);
          setIsLoading(false);
          setResortData([data.resort]);
        } catch (err) {
          console.log(err.meessage);
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      {isLoading ? (
        <div className="h-screen">
          <Loader />
        </div>
      ) : (
        <>
          {resortData ? (
            <>
              <SearchHero
                continent={continent}
                country={country}
                resort={resort}
              />
              <CustomizedBreadcrumbs
                continent={continent}
                country={country}
                resort={resort}
              />
              {resortData &&
                resortData?.map((resort, index) => (
                  <Link to={`/resort/${resort.name}`}>
                    <ResortsCard
                      key={index}
                      resort={resort}
                    />
                  </Link>
                ))}

              <Footer />
            </>
          ) : (
            <ResortNotFound />
          )}
        </>
      )}
    </>
  );
};

export default SearchPage;
