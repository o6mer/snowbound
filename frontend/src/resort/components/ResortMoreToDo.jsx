import { Button } from "@mui/material";
import React, { useState } from "react";
import MapContainer from "./MapContainer";

const ResortMoreToDo = ({ resortData }) => {
  const [selected, setSelected] = useState("hotels");
  return (
    <section className="flex flex-col w-full justify-center items-center">
      <div className="flex">
        <Button
          onClick={(e) => {
            setSelected("hotels");
          }}
        >
          Hotels
        </Button>
        <Button
          onClick={(e) => {
            setSelected("restaurants");
          }}
        >
          Restaurants
        </Button>
        <Button
          category="equipment"
          onClick={(e) => {
            setSelected("ski-equipment");
          }}
        >
          Equipment
        </Button>
        <Button
          category="nightlife"
          onClick={(e) => {
            setSelected("nightlife");
          }}
        >
          Nightlife
        </Button>
      </div>
      <MapContainer location={resortData.location} category={selected} />
    </section>
  );
};

export default ResortMoreToDo;
