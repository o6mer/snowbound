import React from "react";
import axios from "axios";
import { useState } from "react";
import Review from "../../general/Review";
const userReviews = ({userReviews}) => {
console.log(userReviews);
  return (
    <div>
      
      <div className="flex flex-col gap-2 overflow-y-scroll mr-20 h-[80vh] rounded-md bg-white bg-opacity-90">
        {userReviews?.length ? (
          userReviews?.map((review) => <Review {...review} />)
        ) : (
          <div className="">No Reviews</div>
        )}
      </div>
    </div>
  );
};

export default userReviews;
