import { Rating } from "@mui/material";
import React, { useContext, useState } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import dateFormat, { masks } from "dateformat";
import { UserContext } from "../../contexts/UserContextProvider";
import axios from "axios";
import NeedTologinModal from "./NeedTologinModal";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
const Review = ({
  id,
  title,
  body,
  star,
  vote,
  resort_id,
  date,
  poster,
  images,
  likes,
}) => {
  const { user } = useContext(UserContext);
  const [votes, setVotes] = useState(vote);
  const [open, setOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(
    checkIfLiked({ likes, username: user?.username })
  );

  function checkIfLiked({ likes, username }) {
    const isLiked = likes?.find((like) => like.username === username);
    return !!isLiked;
  }

  const handlUpVote = async () => {
    if (!user) return setOpen(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/review/${
          isLiked ? "downvote" : "upvote"
        }`,
        {
          id,
          username: user.username,
        }
      );
    } catch (err) {
      console.log(err);
    }
    setVotes(isLiked ? votes - 1 : votes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex flex-col h-fit gap-4 px-8">
      <header className="flex flex-col">
        <p className="font-bold">{poster}</p>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Rating name="read-only" value={Number(star)} readOnly />
            <p className="text-gray-500">{dateFormat(date, "mmmm yyyy")}</p>
          </div>
          <button
            className={`${
              user && "hover:scale-[1.05] hover:text-lg"
            }text-md transition-all flex items-center gap-1 font-bold`}
            onClick={handlUpVote}
          >
            <p className="">{votes}</p>
            {isLiked ? (
              <ThumbUpIcon sx={{ color: "black" }} />
            ) : (
              <ThumbUpOutlinedIcon />
            )}
          </button>
        </div>
      </header>
      <div>
        <p className="text-xl">{title}</p>
        <p className="text-gray-700">{body}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {images?.map((image) => (
          <div className="w-[20%]">
            <img
              key={image.link}
              src={image.link}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <footer className="flex justify-between"></footer>
      <NeedTologinModal
        text={"Want to upvote? You need to login first"}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Review;
