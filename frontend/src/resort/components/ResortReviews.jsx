import React, { useContext, useState } from "react";
import Review from "../../general/Review";
import { Button, Divider, Rating } from "@mui/material";
import { UserContext } from "../../contexts/UserContextProvider";
import NewReviewModal from "./NewReviewModal";

const calcAverage = (reviews) => {
  const allRatings = reviews?.map((review) => review.star);
  const sum = allRatings?.reduce((partialSum, a) => partialSum + a, 0);
  const avgRatings = sum / allRatings?.length;
  return avgRatings.toFixed(1);
};

const ResortReviews = ({ resortData }) => {
  const { reviews } = resortData;

  const [avgStar] = useState(calcAverage(resortData.reviews));
  const [open, setOpen] = useState(false);

  const { user } = useContext(UserContext);

  return (
    <section className="flex flex-col flex-grow">
      <p className="text-center flex items-center justify-center gap-2 text-lg font-bold p-2">
        {reviews?.length} Reviews{" "}
        {reviews?.length ? (
          <div className="flex items-center">
            <Rating
              name="avg-rating"
              value={avgStar}
              readOnly
              precision={0.1}
            />
            <p className="font-normal text-gray-500">({avgStar})</p>
          </div>
        ) : null}
      </p>
      <ul className="flex flex-col gap-2 overflow-y-scroll  h-[50vh] ">
        {reviews?.length ? (
          reviews
            ?.sort((a, b) => {
              if (a.vote < b.vote) return 1;
              if (a.vote > b.vote) return -1;
              return 0;
            })
            ?.map((review) => (
              <li key={review.id + review.title}>
                <Review {...review} />
                <Divider />
              </li>
            ))
        ) : (
          <div className="">No Reviews</div>
        )}
      </ul>
      {user ? <Button onClick={() => setOpen(true)}>Add Review</Button> : null}
      <NewReviewModal open={open} setOpen={setOpen} resortData={resortData} />
    </section>
  );
};

export default ResortReviews;
