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
    <section className="flex flex-col justify-center items-center w-screen">
      <div className="flex gap-2 p-4  h-full overflow-x-auto w-full">
        <Button
          size="large"
          variant={selected === "hotels" ? "contained" : "outlined"}
          onClick={(e) => {
            handleSelection("hotels");
          }}
        >
          Hotels
        </Button>
        <Button
          size="large"
          variant={selected === "restaurants" ? "contained" : "outlined"}
          onClick={(e) => {
            handleSelection("restaurants");
          }}
        >
          Restaurants
        </Button>
        <Button
          size="large"
          variant={selected === "ski-equipment" ? "contained" : "outlined"}
          category="equipment"
          onClick={(e) => {
            handleSelection("ski-equipment");
          }}
        >
          Equipment
        </Button>
        <Button
          size="large"
          variant={selected === "nightlife" ? "contained" : "outlined"}
          category="nightlife"
          onClick={(e) => {
            handleSelection("nightlife");
          }}
        >
          Nightlife
        </Button>
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
