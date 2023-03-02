import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

const ResortMoreToDo = ({ resortData }) => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="flex flex-col w-full justify-center items-center">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          sx={{ fontSize: "1.4rem", textTransform: "capitalize" }}
          value={0}
          label="Hotels"
          {...a11yProps(0)}
        />
        <Tab
          sx={{ fontSize: "1.4rem", textTransform: "capitalize" }}
          value={1}
          label="Restaurants"
          {...a11yProps(1)}
        />
        <Tab
          sx={{ fontSize: "1.4rem", textTransform: "capitalize" }}
          value={2}
          label="Equipment"
          {...a11yProps(2)}
        />
        <Tab
          sx={{ fontSize: "1.4rem", textTransform: "capitalize" }}
          value={3}
          label="Nightlife"
          {...a11yProps(3)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </section>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default ResortMoreToDo;
