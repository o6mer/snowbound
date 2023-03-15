import axios from "axios";
import React from "react";

const imageUploader = async (files) => {
  try {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "bit-site-uploads");

    const { data } = await axios.post(
      `${import.meta.env.VITE_CLOUDINARY_URL}/image/upload`,
      formData
    );

    return data.secure_url;
  } catch (err) {
    console.log(err);
  }
};

export default imageUploader;
