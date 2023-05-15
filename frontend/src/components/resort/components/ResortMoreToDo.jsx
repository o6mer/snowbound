import { Button } from "@mui/material";
import React, { useState } from "react";
import MapContainer from "./MapContainer";

const ResortMoreToDo = ({ resortData }) => {
  const [selected, setSelected] = useState("hotels");

  const handleSelection = (newSelection) => {
    if (newSelection === selected) return;

    setSelected(newSelection);
  };

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="flex gap-2 p-4 overflow-x-auto w-full justify-start md:justify-center">
        <button
          className={`border-blue-500 border-2 px-2 py-1 rounded font-bold transition-all hover:bg-blue-500 hover:text-white ${
            selected === "hotels" && "bg-blue-500 text-white"
          }`}
          onClick={(e) => {
            handleSelection("hotels");
          }}
        >
          Hotels
        </button>
        <button
          className={`border-blue-500 border-2 px-2 py-1 rounded font-bold transition-all  hover:bg-blue-500 hover:text-white  ${
            selected === "restaurants" && "bg-blue-500 text-white"
          }`}
          onClick={(e) => {
            handleSelection("restaurants");
          }}
        >
          Restaurants
        </button>
        <button
          className={`border-blue-500 border-2 px-2 py-1 rounded font-bold transition-all hover:bg-blue-500 hover:text-white   ${
            selected === "ski-equipment" && "bg-blue-500 text-white"
          }`}
          category="equipment"
          onClick={(e) => {
            handleSelection("ski-equipment");
          }}
        >
          Equipment
        </button>
        <buttton
          className={`border-blue-500 border-2 px-2 py-1 rounded font-bold transition-all hover:bg-blue-500 hover:text-white  ${
            selected === "nightlife" && "bg-blue-500 text-white"
          }`}
          category="nightlife"
          onClick={(e) => {
            handleSelection("nightlife");
          }}
        >
          Nightlife
        </buttton>
      </div>
      <MapContainer
        location={resortData?.location}
        name={resortData?.name}
        category={selected}
      />
    </section>
  );
};

export default ResortMoreToDo;
