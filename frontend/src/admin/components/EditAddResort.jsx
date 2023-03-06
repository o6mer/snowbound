import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Checkbox, IconButton, Input, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CloseIcon from "@mui/icons-material/Close";
// import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const EditAddResort = () => {
  const { resortName } = useParams();
  const navigate = useNavigate();
  const [resort, setResort] = useState({});
  const noImageAvailable =
    "https://www.murcal.com/scs/extensions/Workdom/Summit_June_2021_2/1.0.0/img/no_image_available.jpeg";

  const DUMMY_RESORT = {
    name: "resort name",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, consequatur rem amet perferendis fuga nobis dignissimos minima voluptatem doloremque maxime.",
    // liveCam:
    //   "https://www.skylinewebcams.com/en/webcam/italia/veneto/belluno/cortina-d-ampezzo.html",
    location: "google location",
    city: "resort city",
    country: "resort country",
    price: 3,
    kmOfTracks: 80,
    greenTrack: 5,
    blueTrack: 10,
    redTrack: 5,
    blackTrack: 20,
    blackTrack2X: 25,
    soloTrack: 30,
    siteHiegt: 3000,
    beginnerFriendly: 1,
    intermediateFriendly: 2,
    proFriendly: 3,
    kidFriendly: 2,
    familyFriendly: 1,
    liftWaitingTime: 2,
    artificialSnow: true,
    offSeason: false,
    hikingTracks: 10,
    images: [
      "https://www.murcal.com/scs/extensions/Workdom/Summit_June_2021_2/1.0.0/img/no_image_available.jpeg",
      "",
      "",
    ],
  };

  useEffect(() => {
    console.log(typeof DUMMY_RESORT.artificialSnow);
    setResort(DUMMY_RESORT);
  }, []);

  const handleChangeInput = (e, key) => {
    const temp = resort;
    temp[key] = e.target.value;
    setResort({ ...temp });
  };

  const saveResort = () => {
    const finalResort = [];
    resort.images?.forEach((image) => {
      if (image) {
        finalResort.push(image);
      }
    });
    console.log(finalResort);

    axios
      .post("", finalResort)
      .then((res) => {
        navigate("/admin");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleChangeInputImage = (e, index) => {
    const temp = resort;
    temp.images[index] = e.target.value;
    setResort({ ...temp });
  };

  return (
    <div className="flex flex-col  gap-10 justify-center py-10 mx-[10vw]">
      <div className="city name country flex justify-between gap-10 flex-wrap">
        <TextField
          multiline
          className="capitalize"
          // id={key}
          label={"name"}
          type={"text"}
          value={resort?.name || "" || ""}
          onChange={(e) => handleChangeInput(e, "name")}
        />
        <TextField
          multiline
          className="capitalize"
          // id={key}
          label={"city"}
          type={"text"}
          value={resort?.city || ""}
          onChange={(e) => handleChangeInput(e, "city")}
        />
        <TextField
          multiline
          className="capitalize"
          // id={key}
          label={"country"}
          type={"text"}
          value={resort?.country || ""}
          onChange={(e) => handleChangeInput(e, "country")}
        />
      </div>
      <div className="desc flex  ">
        <TextField
          fullWidth
          multiline
          className="capitalize"
          // id={key}
          label={"description"}
          type={"text"}
          value={resort?.description || ""}
          onChange={(e) => handleChangeInput(e, "description")}
        />
      </div>
      <div className="location flex justify-center gap-10  ">
        <TextField
          multiline
          className="capitalize"
          //   fullWidth
          // id={key}
          label={"location"}
          type={"text"}
          value={resort?.location || ""}
          onChange={(e) => handleChangeInput(e, "location")}
        />
        <TextField
          multiline
          className="capitalize"
          fullWidth
          // id={key}
          label={"liveCam"}
          type={"text"}
          value={resort?.liveCam || ""}
          onChange={(e) => handleChangeInput(e, "liveCam")}
        />
      </div>
      <div className="nummbers flex flex-wrap justify-between gap-10">
        <TextField
          className="capitalize"
          label={"price"}
          type="number"
          sx={{ width: "223px" }}
          InputProps={{ inputProps: { min: 1, max: 3 } }}
          value={resort?.price || ""}
          onChange={(e) => handleChangeInput(e, "price")}
        />
        <TextField
          className="capitalize"
          label={"Km Of Tracks"}
          type="number"
          value={resort?.kmOfTracks || ""}
          onChange={(e) => handleChangeInput(e, "kmOfTracks")}
        />
        <TextField
          className="capitalize"
          label={"Green Track"}
          type="number"
          value={resort?.greenTrack || ""}
          onChange={(e) => handleChangeInput(e, "greenTrack")}
        />
        <TextField
          className="capitalize"
          label={"Blue Track"}
          type="number"
          value={resort?.blueTrack || ""}
          onChange={(e) => handleChangeInput(e, "blueTrack")}
        />
        <TextField
          className="capitalize"
          label={"Red Track"}
          type="number"
          value={resort?.redTrack || ""}
          onChange={(e) => handleChangeInput(e, "redTrack")}
        />
        <TextField
          className="capitalize"
          label={"Black Track"}
          type="number"
          value={resort?.blackTrack || ""}
          onChange={(e) => handleChangeInput(e, "blackTrack")}
        />
        <TextField
          className="capitalize"
          label={"Black Track2X"}
          type="number"
          value={resort?.blackTrack2X || ""}
          onChange={(e) => handleChangeInput(e, "blackTrack2X")}
        />
        <TextField
          className="capitalize"
          label={"Solo Track"}
          type="number"
          value={resort?.soloTrack || ""}
          onChange={(e) => handleChangeInput(e, "soloTrack")}
        />
        <TextField
          className="capitalize"
          label={"Site Hiegt"}
          type="number"
          value={resort?.siteHiegt || ""}
          onChange={(e) => handleChangeInput(e, "siteHiegt")}
        />
        <TextField
          className="capitalize"
          label={"Beginner Friendly"}
          InputProps={{ inputProps: { min: 1, max: 3 } }}
          type="number"
          sx={{ width: "223px" }}
          value={resort?.beginnerFriendly || ""}
          onChange={(e) => handleChangeInput(e, "beginnerFriendly")}
        />
        <TextField
          className="capitalize"
          label={"intermediate Friendly"}
          type="number"
          InputProps={{ inputProps: { min: 1, max: 3 } }}
          sx={{ width: "223px" }}
          value={resort?.intermediateFriendly || ""}
          onChange={(e) => handleChangeInput(e, "intermediateFriendly")}
        />
        <TextField
          className="capitalize"
          label={"pro Friendly"}
          type="number"
          sx={{ width: "223px" }}
          InputProps={{ inputProps: { min: 1, max: 3 } }}
          value={resort?.proFriendly || ""}
          onChange={(e) => handleChangeInput(e, "proFriendly")}
        />
        <TextField
          className="capitalize"
          label={"kid Friendly"}
          type="number"
          sx={{ width: "223px" }}
          InputProps={{ inputProps: { min: 1, max: 3 } }}
          value={resort?.kidFriendly || ""}
          onChange={(e) => handleChangeInput(e, "kidFriendly")}
        />
        <TextField
          className="capitalize"
          label={"family Friendly"}
          type="number"
          sx={{ width: "223px" }}
          InputProps={{ inputProps: { min: 1, max: 3 } }}
          value={resort?.familyFriendly || ""}
          onChange={(e) => handleChangeInput(e, "familyFriendly")}
        />
        <TextField
          className="capitalize"
          label={"lift Waiting Time"}
          type="number"
          sx={{ width: "223px" }}
          InputProps={{ inputProps: { min: 1, max: 3 } }}
          value={resort?.liftWaitingTime || ""}
          onChange={(e) => handleChangeInput(e, "liftWaitingTime")}
        />
        <TextField
          className="capitalize"
          label={"hiking Tracks"}
          type="number"
          value={resort?.hikingTracks || ""}
          onChange={(e) => handleChangeInput(e, "hikingTracks")}
        />
      </div>
      <div className="chckobox flex justify-center gap-10 flex-wrap">
        <div className="border px-5 rounded-md border-gray-400">
          <label
            className="capitalize cursor-pointer "
            htmlFor={"artificialSnow"}
          >
            {"artificial Snow"}
          </label>
          <Checkbox
            id={"artificialSnow"}
            checked={resort["artificialSnow"] || false}
            onChange={(e) => {
              const temp = resort;
              temp["artificialSnow"] = e.target.checked;
              setResort({ ...temp });
            }}
          />
        </div>
        <div className="border px-5 rounded-md border-gray-400">
          <label className="capitalize cursor-pointer " htmlFor={"offSeason"}>
            {"off Season"}
          </label>
          <Checkbox
            id={"offSeason"}
            checked={resort["offSeason"] || false}
            onChange={(e) => {
              const temp = resort;
              temp["offSeason"] = e.target.checked;
              setResort({ ...temp });
            }}
          />
        </div>
      </div>
      <div className="images flex flex-col gap-5">
        <h2 className="border-b font-bold text-lg  pb-2 ">Images Links</h2>
        <div className="flex flex-col gap-3 max-h-[70vh] overflow-y-auto ">
          {resort.images?.map((image, index) => {
            return (
              <div key={index} className="flex items-center mt-2 ">
                <TextField
                  fullWidth
                  className="capitalize"
                  // id={key}
                  label={"images" + " " + (index + 1)}
                  type={"text"}
                  value={resort.images[index]}
                  onChange={(e) => handleChangeInputImage(e, index)}
                />
              </div>
            );
          })}
        </div>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => {
            const temp = resort;
            temp.images.push("");
            console.log(temp);
            setResort({ ...temp });
          }}
        >
          Add Image
        </Button>
        <div
          id="imagespreview"
          className="imagespreview flex flex-wrap  gap-4 max-h-[85vh] overflow-y-auto "
        >
          {resort.images?.map((image, index) => {
            return (
              <div key={index} className="max-w-[30%]">
                <p className="text-center font-semibold">Image {index}</p>
                <img
                  className="w-full max-h-[200px] mt-5"
                  src={image ? image : noImageAvailable}
                  alt="No Image"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-1 ">
        {/* <Button /> */}
        <Button
          variant="outlined"
          color="error"
          endIcon={<CloseIcon />}
          onClick={() => {
            navigate("/admin");
          }}
        >
          Cancel
        </Button>
        <Button
          variant="outlined"
          color="info"
          endIcon={<RestartAltIcon />}
          onClick={() => setResort(DUMMY_RESORT)}
        >
          Restore
        </Button>
        <Button
          sx={{ marginLeft: "auto" }}
          color="success"
          variant="outlined"
          endIcon={<SaveAltIcon />}
          onClick={saveResort}
        >
          Save
        </Button>
      </div>

      {/* {Object.keys(resort).map((key) => {
        let type = typeof DUMMY_RESORT[key];
        if (type === "string") {
          type = "text";
        }
        return (
          <div>
            {type === "boolean" ? (
              <div>
                <label className="capitalize" htmlFor={key}>
                  {key}
                </label>
                <Checkbox
                  id={key}
                  defaultChecked={resort[key]}
                  onChange={(e) => {
                    const temp = resort;
                    temp[key] = e.target.checked;
                    setResort(temp);
                  }}
                />
              </div>
            ) : (
              <TextField
                multiline
                className="capitalize"
                id={key}
                label={key}
                type={type !== undefined ? type : "text"}
                value={resort[key]}
                onChange={(e) => handleChangeInput(e, key)}
              />
            )}
          </div>
        );
      })} */}
    </div>
  );
};

export default EditAddResort;
