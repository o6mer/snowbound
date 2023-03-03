import React from "react";
import { useState ,useEffect} from "react";
import Navbar from "../general/Navbar";
import CustomizedBreadcrumbs from "./components/CustomizedBreadcrumbs";
import ResortsCard from "./components/ResortsCard";
import SearchHero from "./components/SearchHero";
import { useParams } from "react-router-dom";
import axios from "axios";
const SearchPage = () => {
 const [resortData, setResortData] = useState();
 const [isLoading, setIsLoading] = useState(false);

 const { name } = useParams();

 useEffect(() => {
   const fetchData = async () => {
     setIsLoading(true);
     try {
       const { data } = await axios.get(`http://localhost:8000/resort/${name}`);

       if (!data) return;
       setIsLoading(false);
       setResortData({ ...data });
     } catch (err) {
       console.log(err.meessage);
       setIsLoading(false);
     }
   };
   fetchData();
 }, []);
  return (
    <div>
      <Navbar />
      <SearchHero/>
      <CustomizedBreadcrumbs />
      <ResortsCard />
      <ResortsCard />
      <ResortsCard />
    </div>
  );
};

export default SearchPage;
