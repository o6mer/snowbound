import React from "react";
import Navbar from "../general/Navbar";
import CustomizedBreadcrumbs from "./components/CustomizedBreadcrumbs";
import ResortsCard from "./components/ResortsCard";
import SearchHero from "./components/SearchHero";

const SearchPage = () => {
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
