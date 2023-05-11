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
import Loader from "../../general/Loader";
import ResortNotFound from "./ResortNotFound";

const EditAddResort = () => {
  const navigate = useNavigate();
  const { resortName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isNewResort, setIsNewResort] = useState(false);
  const [defaultResort, setDefaultResort] = useState([]);
  const [resort, setResort] = useState({});
  const [resortImages, setResortImages] = useState([]);
  const noImageAvailable =
    "https://www.murcal.com/scs/extensions/Workdom/Summit_June_2021_2/1.0.0/img/no_image_available.jpeg";

  const dummyNewResort = {
    artificialSnow: null,
    beginnerFriendly: null,
    blackTrack: null,
    blackTrackX2: null,
    blueTrack: null,
    city_id: null,
    country_id: null,
    description: null,
    familyFriendly: null,
    greenTrack: null,
    hikingTracks: null,

    image: null,
    intermediateFriendly: null,
    kidFriendly: null,
    kmTrack: null,
    liftWaitingTime: null,
    livecam: null,
    location: null,
    name: null,
    offSeason: null,
    price: null,
    proFriendly: null,
    redTrack: null,
    siteHeight: null,
    skiPass: null,
  };
  useEffect(() => {
    setIsLoading(true);
    if (resortName === "new") {
      setResort(dummyNewResort);
      setDefaultResort([[dummyNewResort], []]);
      setIsNewResort(true);
      setIsLoading(false);
    } else {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/api/resort/find/${resortName}`
        )
        .then((res) => {
          if (res.data) {
            setResort(res.data.resort);
            setDefaultResort(res.data);
            setResortImages(res.data.images);
            setIsNewResort(false);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleChangeInput = (e, key) => {
    const temp = resort;
    temp[key] = e.target.value;
    setResort({ ...temp });
  };
  const updateResort = (e) => {
    e.preventDefault();
    const resortValues = resort;
    delete resortValues.name;
    delete resortValues.id;

    const imagesLinks = resortImages.map((image) => {
      return image.link;
    });

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/resort/update`, {
        name: resortName,
        values: resortValues,
        images: imagesLinks,
      })
      .then((res) => {
        navigate("/admin");

        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const saveNewResort = (e) => {
    e.preventDefault();
    let imagesLinks = [];
    if (resortImages) {
      imagesLinks = resortImages?.map((image) => {
        return image.link;
      });
    }
    console.log({
      resort: resort,
      img: imagesLinks,
    });
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/resort/create`, {
        resort: resort,
        img: imagesLinks,
      })
      .then((res) => {
        navigate("/admin");
      })
      .catch((err) => console.log(err));
  };
  const handleChangeInputImage = (e, index) => {
    const temp = resortImages;
    temp[index].link = e.target.value;
    setResortImages([...temp]);
  };

  return (
    <>
      {isLoading ? (
        <div className=" h-screen">
          <Loader />
        </div>
      ) : (
        <>
          {!resort ? (
            <ResortNotFound />
          ) : (
            <form
              action=""
              onSubmit={(e) =>
                isNewResort ? saveNewResort(e) : updateResort(e)
              }
            >
              <div className="flex flex-col  gap-10 justify-center py-10 mx-[10vw]">
                <div className="city name country flex justify-between gap-10 flex-wrap">
                  <TextField
                    className="capitalize"
                    required
                    // id={key}
                    label={"name "}
                    disabled={!isNewResort}
                    type={"text"}
                    value={resort?.name || ""}
                    onChange={(e) => handleChangeInput(e, "name")}
                  />
                  <TextField
                    multiline
                    className="capitalize"
                    // id={key}
                    disabled={!isNewResort}
                    label={"city"}
                    type={"text"}
                    value={resort?.city_id || ""}
                    onChange={(e) => handleChangeInput(e, "city_id")}
                  />
                  <TextField
                    multiline
                    className="capitalize"
                    // id={key}
                    disabled={!isNewResort}
                    label={"country"}
                    type={"text"}
                    value={resort?.country_id || ""}
                    onChange={(e) => handleChangeInput(e, "country_id")}
                  />
                </div>
                <div className="desc flex flex-col gap-5  ">
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
                  <TextField
                    fullWidth
                    multiline
                    className="capitalize"
                    // id={key}
                    label={"main Image"}
                    type={"text"}
                    value={resort?.image || ""}
                    onChange={(e) => handleChangeInput(e, "image")}
                  />
                </div>
                <div className="location flex flex-col-reverse justify-center gap-10  ">
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
                    value={resort?.livecam || ""}
                    onChange={(e) => handleChangeInput(e, "livecam")}
                  />
                </div>
                <div className="nummbers  flex  flex-wrap justify-between gap-10 grid">
                  <TextField
                    className="capitalize"
                    label={"price"}
                    type="number"
                    //
                    InputProps={{ inputProps: { min: 1, max: 3 } }}
                    value={resort?.price || ""}
                    onChange={(e) => handleChangeInput(e, "price")}
                  />
                  <TextField
                    className="capitalize"
                    label={"Km Of Tracks"}
                    type="number"
                    value={resort?.kmTrack || ""}
                    onChange={(e) => handleChangeInput(e, "kmTrack")}
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
                    value={resort?.blackTrackX2 || ""}
                    onChange={(e) => handleChangeInput(e, "blackTrackX2")}
                  />

                  <TextField
                    className="capitalize"
                    label={"site Height"}
                    type="number"
                    value={resort?.siteHeight || ""}
                    onChange={(e) => handleChangeInput(e, "siteHeight")}
                  />
                  <TextField
                    className="capitalize"
                    label={"Beginner Friendly"}
                    InputProps={{ inputProps: { min: 1, max: 3 } }}
                    type="number"
                    value={resort?.beginnerFriendly || ""}
                    onChange={(e) => handleChangeInput(e, "beginnerFriendly")}
                  />
                  <TextField
                    className="capitalize"
                    label={"intermediate Friendly"}
                    type="number"
                    InputProps={{ inputProps: { min: 1, max: 3 } }}
                    value={resort?.intermediateFriendly || ""}
                    onChange={(e) =>
                      handleChangeInput(e, "intermediateFriendly")
                    }
                  />
                  <TextField
                    className="capitalize"
                    label={"pro Friendly"}
                    type="number"
                    InputProps={{ inputProps: { min: 1, max: 3 } }}
                    value={resort?.proFriendly || ""}
                    onChange={(e) => handleChangeInput(e, "proFriendly")}
                  />
                  <TextField
                    className="capitalize"
                    label={"kid Friendly"}
                    type="number"
                    InputProps={{ inputProps: { min: 1, max: 3 } }}
                    value={resort?.kidFriendly || ""}
                    onChange={(e) => handleChangeInput(e, "kidFriendly")}
                  />
                  <TextField
                    className="capitalize"
                    label={"family Friendly"}
                    type="number"
                    InputProps={{ inputProps: { min: 1, max: 3 } }}
                    value={resort?.familyFriendly || ""}
                    onChange={(e) => handleChangeInput(e, "familyFriendly")}
                  />
                  <TextField
                    className="capitalize"
                    label={"lift Waiting Time"}
                    type="number"
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

                  <TextField
                    className="capitalize"
                    label={"ski Pass_$"}
                    type="number"
                    value={resort?.skiPass || ""}
                    onChange={(e) => handleChangeInput(e, "skiPass")}
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
                      checked={resort?.artificialSnow || false}
                      onChange={(e) => {
                        const temp = resort;
                        temp["artificialSnow"] = e.target.checked;
                        setResort({ ...temp });
                      }}
                    />
                  </div>
                  <div className="border px-5 rounded-md border-gray-400">
                    <label
                      className="capitalize cursor-pointer "
                      htmlFor={"offSeason"}
                    >
                      {"off Season"}
                    </label>
                    <Checkbox
                      id={"offSeason"}
                      checked={resort?.offSeason || false}
                      onChange={(e) => {
                        const temp = resort;
                        temp["offSeason"] = e.target.checked;
                        setResort({ ...temp });
                      }}
                    />
                  </div>
                </div>
                <div className="images flex flex-col gap-5 ">
                  <div className="border-y flex justify-between items-center py-3">
                    <h2 className=" font-bold text-lg   ">Images Links</h2>
                    <Button
                      type="button"
                      variant="outlined"
                      color="warning"
                      endIcon={<RestartAltIcon />}
                      onClick={() => {
                        setResortImages([...defaultResort.images]);
                      }}
                    >
                      Reset Images
                    </Button>
                  </div>
                  <div className=" flex flex-col gap-3 max-h-[70vh] overflow-y-auto  ">
                    {resortImages?.map((image, index) => {
                      return (
                        <div key={index} className="flex items-center mt-2 ">
                          <TextField
                            fullWidth
                            className="capitalize"
                            // id={key}
                            label={"images" + " " + (index + 1)}
                            type={"text"}
                            value={image.link}
                            onChange={(e) => handleChangeInputImage(e, index)}
                          />
                        </div>
                      );
                    })}
                  </div>

                  <Button
                    variant="contained"
                    type="button"
                    endIcon={<AddIcon />}
                    onClick={() => {
                      const temp = resortImages;
                      temp.push({ link: "" });
                      setResortImages([...temp]);
                      // setResort({ ...temp });
                    }}
                  >
                    Add Image
                  </Button>
                  <div className="imagespreview  gap-4 max-h-[85vh] overflow-y-auto grid">
                    {resortImages?.map((image, index) => {
                      return (
                        <div
                          key={index}
                          className=" flex flex-col items-center"
                        >
                          <p className="text-center font-semibold">
                            Image {index}
                          </p>
                          <img
                            className="w-full max-h-[200px] mt-5 object-cover h-full "
                            src={image.link ? image.link : noImageAvailable}
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
                    type="button"
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
                    type="button"
                    // type="submit"
                    variant="outlined"
                    color="info"
                    endIcon={<RestartAltIcon />}
                    onClick={() => setResort({ ...defaultResort.resort })}
                  >
                    Restore
                  </Button>
                  <Button
                    type="submit"
                    sx={{ marginLeft: "auto" }}
                    color="success"
                    variant="outlined"
                    endIcon={<SaveAltIcon />}
                    // onClick={saveResort}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
          )}
        </>
      )}
    </>
  );
};

export default EditAddResort;
