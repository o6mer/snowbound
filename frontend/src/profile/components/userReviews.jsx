import React from "react";
import axios from "axios";
import { useState } from "react";
import Review from "../../general/Review";
const userReviews = ({ userReviews }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 overflow-y-scroll  rounded-md bg-white bg-opacity-90">
      {userReviews?.length ? (
        userReviews?.map((review) => <Review {...review} />)
      ) : (
        <div className="">No Reviews</div>
      )}
    </div>
  );
};

export default userReviews;
