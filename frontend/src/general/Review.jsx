import { Rating } from "@mui/material";
import React, { useContext } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import dateFormat, { masks } from "dateformat";
import { UserContext } from "../contexts/UserContextProvider";

const Review = ({
  title,
  body,
  star,
  vote,
  resort_id,
  date,
  poster,
  images,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col h-fit gap-4 px-8">
      <header className="flex flex-col">
        <p className="font-bold">{poster}</p>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Rating name="read-only" value={star} readOnly />
            <p className="text-gray-500">{dateFormat(date, "mmmm yyyy")}</p>
          </div>
          <button
            disabled={!user}
            className={`${
              user && "hover:scale-[1.05] hover:text-lg"
            }text-md transition-all flex items-center gap-1 font-bold`}
          >
            <p className="">{vote}</p>
            <ThumbUpOutlinedIcon />
          </button>
        </div>
      </header>
      <div>
        <p className="text-xl">{title}</p>
        <p>{body}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {images?.map((image) => (
          <img src={image.link} alt="" className="max-w-xs" />
        ))}
      </div>
      <footer className="flex justify-between"></footer>
    </div>
  );
};

export default Review;
