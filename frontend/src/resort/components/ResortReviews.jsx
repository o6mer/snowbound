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
const ResortReviews = ({ resortData }) => {
  const { reviews } = resortData;

  const allRatings = reviews?.map((review) => review.star);
  const sum = allRatings?.reduce((partialSum, a) => partialSum + a, 0);
  const avgRatings = sum / allRatings?.length;

  const [open, setOpen] = useState(false);

  const [reviewData, setReviewData] = useState({
    title: "",
    body: "",
    images: [],
    star: 0,
  });
  const [files, setFiles] = useState(null);

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const [isError, setIsError] = useState({
    title: false,
    body: false,
    star: false,
  });

  const { user } = useContext(UserContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const uplaodImage = async () => {
    if (!files) return;

    try {
      setIsImageLoading(true);
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", "bit-site-uploads");

      const { data } = await axios.post(
        `${import.meta.env.VITE_CLOUDINARY_URL}/image/upload`,
        formData
      );

      setReviewData((prev) => {
        return { ...prev, images: [...prev.images, data.secure_url] };
      });
      setFiles(null);
      setIsImageLoading(false);
    } catch (err) {
      console.log(err);
      setIsImageLoading(false);
    }
  };

  const handleChange = (e) => {
    if (isError) setIsError(true);

    const field = e.currentTarget.name;
    const value = e.currentTarget.value;
    setReviewData((prev) => {
      prev[field] = value;
      return { ...prev };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.email || !user.password)
      return setIsError({
        title: !reviewData.title,
        body: !reviewData.body,
        star: !reviewData.star,
      });

    try {
      setIsSubmitLoading(true);

      const { title, body, star, images } = reviewData;

      const formatedReview = {
        review: {
          title,
          body,
          star,
          poster: user?.username,
          resort_id: resortData?.name,
          date: dateFormat(new Date(), "yyyy-mm-dd"),
        },
        img: images,
      };

      const { data } = await axios.post(
        "http://localhost:8000/api/review/create",
        formatedReview
      );

      console.log(data);
      setIsSubmitLoading(false);
    } catch (err) {
      console.log(err.message);
      setIsSubmitLoading(false);
    }
  };

  const handleClearForm = () => {};

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
      {user ? <Button onClick={handleOpen}>Add Review</Button> : null}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form
          onSubmit={handleSubmit}
          className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  max-w-fit w-full bg-white p-12 rounded-lg"
        >
          <header className="">
            <button className=" absolute right-4 top-4" onClick={handleClose}>
              <CloseIcon />
            </button>
            <div className="flex justify-center">
              <p className="text-xl font-bold">{resortData?.name}</p>
            </div>
          </header>
          <div className="flex flex-col gap-2 mt-4">
            <TextField
              label="title"
              name="title"
              onChange={handleChange}
              value={reviewData.title}
              error={isError.title}
            />
            <TextField
              label="description"
              multiline
              name="body"
              onChange={handleChange}
              value={reviewData.body}
              error={isError.body}
            />
            <div className="flex items-center">
              <p className="text-lg">Overall:</p>
              <Rating
                name="star"
                value={Number(reviewData.star)}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-center">
              <label
                htmlFor="iamges-input"
                className="cursor-pointer hover:bg-gray-300 transition-all rounded-lg p-2"
              >
                {files ? files[0]?.name : "Chosoe Image"}
                <FileUploadOutlinedIcon />
              </label>
              <input
                id="iamges-input"
                type="file"
                onChange={(e) => setFiles(e.target.files)}
                className="hidden"
              />
              {isImageLoading ? (
                <Loader />
              ) : (
                <Button onClick={uplaodImage} variant="contained">
                  Upload
                </Button>
              )}
            </div>
            <div className="flex ">
              {reviewData.images.map((image) => (
                <img className="w-56" src={image} />
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            {isSubmitLoading ? (
              <Loader />
            ) : (
              <>
                <Button
                  variant="outlined"
                  type="button"
                  onClick={handleClearForm}
                  endIcon={<DeleteOutlineOutlinedIcon fontSize="small" />}
                >
                  Clear
                </Button>
                <Button
                  variant="outlined"
                  type="submit"
                  endIcon={<SendOutlinedIcon fontSize="small" />}
                >
                  Save
                </Button>
              </>
            )}
          </div>
        </form>
      </Modal>
    </section>
  );
};

export default ResortReviews;
