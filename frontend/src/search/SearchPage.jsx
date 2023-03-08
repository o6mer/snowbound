import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../general/Navbar";
import CustomizedBreadcrumbs from "./components/CustomizedBreadcrumbs";
import ResortsCard from "./components/ResortsCard";
import SearchHero from "./components/SearchHero";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../general/Footer";
const SearchPage = () => {
  const [resortData, setResortData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { continent, country, resort } = useParams();

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
    <div>
      <Navbar />
      <SearchHero />
      <CustomizedBreadcrumbs
        continent={continent}
        country={country}
        resort={resort}
      />

      {resortData &&
        resortData?.map((resort, index) => (
          <Link to={`/resort/${resort.name}`}>
            <ResortsCard key={index} resort={resort} />
          </Link>
        ))}

      <Footer />
    </div>
  );
};

export default SearchPage;
