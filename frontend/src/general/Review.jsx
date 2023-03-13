import { Rating } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import dateFormat, { masks } from "dateformat";

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
  return (
    <div className="flex flex-col h-fit gap-4 px-8">
      <header className="flex flex-col">
        <p className="font-bold">{poster}</p>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Rating name="read-only" value={star} readOnly />
            <p className="text-gray-500">{dateFormat(date, "mmmm yyyy")}</p>
          </div>
          <p>
            <FavoriteBorderIcon />
            {vote}
          </p>
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
