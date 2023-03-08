import React from "react";

const AdminResorts = ({ adminResorts }) => {
  return (
    <>
      {adminResorts?.map((adminResort, index) => {
        return <h1 key={index}>{adminResort}</h1>;
      })}
    </>
  );
};

export default AdminResorts;
