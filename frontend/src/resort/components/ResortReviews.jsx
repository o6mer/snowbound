import React, { useContext, useState } from "react";
import Review from "../../general/Review";
import { Button, Divider, Modal, Rating, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Loader from "../../general/Loader";
import { UserContext } from "../../contexts/UserContextProvider";
import dateFormat, { masks } from "dateformat";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import NewReviewModal from "./NewReviewModal";

const defualtReview = {
  title: "",
  body: "",
  images: [],
  star: 0,
};

const ResortReviews = ({ resortData }) => {
  const { reviews } = resortData;

  const allRatings = reviews?.map((review) => review.star);
  const sum = allRatings?.reduce((partialSum, a) => partialSum + a, 0);
  const avgRatings = sum / allRatings?.length;

  const [open, setOpen] = useState(false);

  const { user } = useContext(UserContext);

  return (
    <section className="flex flex-col flex-grow">
      <p className="text-center flex items-center justify-center gap-2 text-lg font-bold p-2">
        {reviews?.length} Reviews{" "}
        {reviews?.length ? (
          <Rating name="avg-rating" value={avgRatings} readOnly />
        ) : null}
      </p>
      <div className="flex flex-col gap-2 overflow-y-scroll  h-[50vh] ">
        {reviews?.length ? (
          reviews?.map((review) => <Review {...review} />)
        ) : (
          <div className="">No Reviews</div>
        )}
      </div>
      {user ? <Button onClick={() => setOpen(true)}>Add Review</Button> : null}
      <NewReviewModal open={open} setOpen={setOpen} resortData={resortData} />
    </section>
  );
};

export default ResortReviews;
