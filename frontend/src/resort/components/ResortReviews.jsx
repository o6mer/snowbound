import React from "react";
import Review from "../../general/Review";
import { Divider, Rating } from "@mui/material";

const ResortReviews = ({ resortData }) => {
  const { reviews } = resortData;

  const allRatings = reviews?.map((review) => review.star);
  const sum = allRatings?.reduce((partialSum, a) => partialSum + a, 0);
  const avgRatings = sum / allRatings?.length;

  return (
    <section className="">
      <p className="text-center flex items-center justify-center gap-2 text-lg font-bold p-2">
        {reviews?.length} Reviews{" "}
        {reviews?.length ? (
          <Rating name="avg-rating" value={avgRatings} readOnly />
        ) : null}
      </p>
      <div className="flex flex-col gap-2 overflow-y-scroll max-h-[50vh] ">
        {reviews?.length ? (
          reviews?.map((review) => <Review {...review} />)
        ) : (
          <div className="">No Reviews</div>
        )}
      </div>
    </section>
  );
};

export default ResortReviews;
