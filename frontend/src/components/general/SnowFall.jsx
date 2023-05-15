import React, { useContext, useEffect } from "react";
import Snowfall from "react-snowfall";
import { UserContext } from "../../contexts/UserContextProvider";

const SnowFall = () => {
  const { isSnowing, setIsSnowing } = useContext(UserContext);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("isSnowing"));
    console.log(savedState);
    setIsSnowing(
      savedState === null || savedState === undefined ? true : savedState
    );
  }, []);

  useEffect(() => {
    if (isSnowing === undefined || isSnowing === null) return;

    localStorage.setItem("isSnowing", isSnowing);
  }, [isSnowing]);

  return (
    <>
      {isSnowing ? (
        <Snowfall
          style={{
            zIndex: "999",
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        />
      ) : null}
    </>
  );
};

export default SnowFall;
