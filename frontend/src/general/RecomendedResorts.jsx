import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContextProvider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";

const RecomendedResorts = ({ resortData }) => {
  const { user, setUser } = useContext(UserContext);

  const checkFavorite = () => {
    const temp = user?.favorite?.find(
      (fav) => fav.resort_id === resortData.name
    );
    return !!temp;
  };
  const isFavorite = checkFavorite();

  useEffect(() => {
    if (user) {
      checkFavorite();
    }
  }, [user]);

  const addToFavorite = () => {
    axios
      .post("http://localhost:8000/api/favorite/create", {
        resort_id: resortData.name,
        username: user.username,
      })
      .then((res) => {
        console.log(res.data);
        setUser((prev) => {
          return { ...prev, favorite: [...prev.favorite, res.data[0]] };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filterFavorites = (id) => {
    console.log(id);
    const temp = { ...user };
    temp.favorite = temp.favorite.filter((fav) => {
      return fav.id !== id;
    });
    console.log(temp);
    // setIsFavorite(false);
    setUser({ ...temp });
  };
  const check = () => {
    const temp = user?.favorite?.find(
      (fav) => fav.resort_id === resortData.name
    );
    if (temp) {
      return temp;
    }
  };

  const removeFromFavorite = () => {
    const fav = check();
    axios
      .post("http://localhost:8000/api/favorite/delete", {
        id: fav?.id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message == "DELETED") {
          filterFavorites(fav.id);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      id="recomendedImg"
      className={`max-w-md w-full m-10 antialiased text-gray-900`}
    >
      <div>
        <img
          src={resortData?.image}
          alt=" random imgee"
          className="w-96 h-44 object-cover object-center rounded-lg shadow-md"
        />

        <div>
          <div className="relative px-4 -mt-16 ">
            <div className="flex items-center flex-col w-full bg-white p-6 rounded-lg shadow-lg text-center transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-100 duration-300">
              <div className="flex items-baseline w-full">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider ">
                  {resortData?.country_id} &bull; {resortData?.siteHeight}m
                  &bull;{" "}
                  {[...Array(resortData?.price)].map((n) => (
                    <span>$</span>
                  ))}
                </div>
                {isFavorite ? (
                  <button
                    style={{ marginLeft: "auto" }}
                    onClick={removeFromFavorite}
                  >
                    <FavoriteIcon sx={{ color: "red" }} />
                  </button>
                ) : (
                  <button
                    style={{ marginLeft: "auto" }}
                    onClick={addToFavorite}
                  >
                    <FavoriteBorderIcon />
                  </button>
                )}
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                {resortData?.name}
              </h4>

              <div className="mt-1 line-clamp-2">
                {resortData?.description}$
              </div>
              <a
                className="mt-4 rounded-lg  p-2 bg-slate-100 w-max "
                href={`/resort/${resortData?.name}`}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecomendedResorts;
