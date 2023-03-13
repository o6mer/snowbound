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
        <Rating name="avg-rating" value={avgRatings || 4} readOnly />
      </p>
      <div className="flex flex-col gap-2 overflow-y-scroll max-h-[50vh] ">
        {reviews ? (
          reviews?.map((review) => <Review {...review} />)
        ) : (
          <>
            <Review
              title="review title"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aperiam odit deleniti repellendus architecto! Excepturi quas at minima dolorem nesciunt? "
              star={4}
              vote={20}
              resort_id="tynges"
              date={new Date()}
              poster={"omer"}
              images={[
                "https://static.savoie-mont-blanc.com/wp-content/uploads/external/d02d9289b11f5902eef5891085137110-14033081-1407x940.jpg",
                "https://static.savoie-mont-blanc.com/wp-content/uploads/external/d02d9289b11f5902eef5891085137110-14033081-1407x940.jpg",
              ]}
            />
            <Divider />
            <Review
              title="review title"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aperiam odit deleniti repellendus architecto! Excepturi quas at minima dolorem nesciunt? "
              star={4}
              vote={20}
              resort_id="tynges"
              date={new Date()}
              poster={"omer"}
              images={[
                "https://static.savoie-mont-blanc.com/wp-content/uploads/external/d02d9289b11f5902eef5891085137110-14033081-1407x940.jpg",
              ]}
            />
            <Divider />

            <Review
              title="review title"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aperiam odit deleniti repellendus architecto! Excepturi quas at minima dolorem nesciunt? "
              star={4}
              vote={20}
              resort_id="tynges"
              date={new Date()}
              poster={"omer"}
              images={[
                "https://static.savoie-mont-blanc.com/wp-content/uploads/external/d02d9289b11f5902eef5891085137110-14033081-1407x940.jpg",
              ]}
            />
            <Divider />
          </>
        )}
      </div>
    </section>
  );
};

export default ResortReviews;
