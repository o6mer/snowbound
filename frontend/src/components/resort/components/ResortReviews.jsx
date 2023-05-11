import React, { useContext, useState } from "react";
import Review from "../../general/Review";
import { Button, Divider, Rating } from "@mui/material";
import { UserContext } from "../../../contexts/UserContextProvider";
import NewReviewModal from "./NewReviewModal";
import NeedTologinModal from "../../general/NeedTologinModal";

const ResortReviews = ({ resortData }) => {
  const { reviews } = resortData;

  const [open, setOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const { user } = useContext(UserContext);

  const handleAddReview = () => {
    if (!user) return setOpenLoginModal(true);

    setOpen(true);
  };

  return (
    <section className="flex flex-col flex-grow py-4 px-2 rounded-lg">
      <div className="flex justify-between">
        <div className="text-center flex items-center justify-center gap-2 text-lg font-bold p-2">
          <p>{resortData?.review_amount} Reviews </p>
          {resortData?.review_amount ? (
            <div className="flex items-center">
              <Rating
                name="avg-rating"
                value={Number(resortData.avg_rating)}
                readOnly
                precision={0.1}
              />
              <p className="font-normal text-gray-500">
                ({resortData.avg_rating.toFixed(1)})
              </p>
            </div>
          ) : null}
        </div>
        <Button onClick={handleAddReview} variant="contained">
          Add Review
        </Button>
      </div>
      <ul className="flex flex-col gap-2 overflow-y-auto  max-h-[50vh] ">
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
          <div className=" flex justify-center items-center">
            <p>Be the frist to review!</p>
          </div>
        )}
      </ul>

      <NeedTologinModal
        text={"Want to add a reveiw? You need to login first"}
        open={openLoginModal}
        handleClose={() => setOpenLoginModal(false)}
      />
      <NewReviewModal open={open} setOpen={setOpen} resortData={resortData} />
    </section>
  );
};

export default ResortReviews;
