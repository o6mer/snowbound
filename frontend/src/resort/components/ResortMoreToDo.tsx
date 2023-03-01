import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const ResortMoreToDo = ({ resortData }) => {
  const [value, setValue] = useState("hotels");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="flex w-full justify-center">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab sx={{ fontSize: "1.4rem" }} value="hotels" label="Hotels" />
        <Tab
          sx={{ fontSize: "1.4rem" }}
          value="restaurants"
          label="Restaurants"
        />
        <Tab sx={{ fontSize: "1.4rem" }} value="equipment" label="Equipment" />
        <Tab sx={{ fontSize: "1.4rem" }} value="nightlife" label="Nightlife" />
      </Tabs>
    </section>
  );
};

export default ResortMoreToDo;
