import React, { useContext, useState } from "react";
import { Button, Modal, Rating, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Loader from "../../general/Loader";
import { UserContext } from "../../contexts/UserContextProvider";
import dateFormat, { masks } from "dateformat";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import imageUploader from "../../utils/imageUploader";

const defualtReview = {
  title: "",
  body: "",
  images: [],
  star: 0,
};

const NewReviewModal = ({ open, setOpen, resortData }) => {
  const [reviewData, setReviewData] = useState({ ...defualtReview });
  const [files, setFiles] = useState(null);

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const [isError, setIsError] = useState({
    title: false,
    body: false,
    star: false,
  });

  const { user } = useContext(UserContext);

  const handleClose = () => {
    setOpen(false);
  };

  const uplaodImage = async () => {
    if (!files) return;

    try {
      setIsImageLoading(true);

      const imageUrl = await imageUploader(files);

      setReviewData((prev) => {
        return { ...prev, images: [...prev.images, imageUrl] };
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

    if (!reviewData.title || !reviewData.body || !reviewData.star)
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
        `${import.meta.env.VITE_BACKEND_URL}/api/review/create`,
        formatedReview
      );

      handleClearForm();
      handleClose();
      setIsSubmitLoading(false);
      window.location.reload();
    } catch (err) {
      console.log(err.message);
      setIsSubmitLoading(false);
    }
  };

  const handleClearForm = () => {
    setReviewData({ ...defualtReview });
    setFiles(null);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form
        onSubmit={handleSubmit}
        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-max   bg-white p-12 rounded-lg flex flex-col gap-4"
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
            label="Title"
            name="title"
            onChange={handleChange}
            value={reviewData.title}
            error={isError.title}
          />
          <TextField
            label="Description"
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
          <div className="flex justify-center gap-2">
            <label
              htmlFor="iamges-input"
              className="cursor-pointer hover:bg-gray-300 transition-all rounded-lg p-2"
            >
              {files ? files[0]?.name : "Chosoe Image"}
              <FileUploadOutlinedIcon />
              <input
                id="iamges-input"
                type="file"
                onChange={(e) => setFiles(e.target.files)}
                className="hidden"
              />
            </label>

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
              <img key={image} className="w-14" src={image} />
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
                onClick={handleSubmit}
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
  );
};

export default NewReviewModal;
