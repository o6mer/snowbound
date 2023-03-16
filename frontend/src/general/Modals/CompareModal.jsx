import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Modal.css";
import FormModal from "./FormModal";
export default function CompareModal(props) {
  if (!props.open) {
    return null;
  }
  const [resort1, setResort1] = useState("");
  const [resort2, setResort2] = useState("");
  const [resort3, setResort3] = useState("");
  const [allResorts, setAllResorts] = useState([]);
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getAllResorts = async () => {
      await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/resort/get`)
        .then((res) => {
          console.log(res.data);
          setAllResorts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllResorts();
  }, []);
  const handleSelect1 = (event, value) => {
    if (value) {
      setResort1(value);
    }
  };
  const handleSelect2 = (event, value) => {
    if (value) {
      setResort2(value);
    }
  };
  const handleSelect3 = (event, value) => {
    if (value) {
      setResort3(value);
    }
  };
  const Compare = (e) => {
    e.preventDefault();
    if (
      [resort1, resort2].every((resortName) =>
        allResorts.some((resort) => resort.name === resortName)
      ) &&
      resort1 !== resort2 &&
      resort1 !== resort3
    ) {
      document.body.style.overflow = "auto";
      navigate(`/compare/${resort1}&${resort2}&${resort3}`);
    } else {
      setToast(true);
    }
  };
  const closeToast = () => {
    setToast(false);
  };
  return (
    <div className=" fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10  animated fadeIn faster">
      <div className="flex items-center justify-center min-h-screen">
        <div className="px-4 pt-5 pb-4  transform transition-all sm:max-w-lg sm:w-full">
          <main
            id="content"
            role="main"
            className="w-full max-w-md mx-auto p-6"
          >
            <div className="mt-7 bg-white  rounded-2xl shadow-2xl ">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <div className="flex justify-end">
                    <button
                      onClick={props.onClose}
                      className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <h1 className="block text-2xl font-bold text-gray-800 ">
                    {" "}
                    Compare resorts
                  </h1>
                </div>

                <div className="mt-5">
                  <form>
                    <div className="grid gap-y-4">
                      <div>
                        <div className="relative">
                          <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={allResorts.map((resort) => resort.name)}
                            value={resort1}
                            onChange={handleSelect1}
                            sx={{
                              background: "white",
                              opacity: 0.8,
                              border: "5px  gray",
                              width: "100%",
                            }}
                            renderInput={(params) =>
                              !toast ? (
                                <TextField {...params} label="Resort 1" />
                              ) : (
                                <TextField
                                  onClick={closeToast}
                                  error
                                  {...params}
                                  id="outlined-error-helper-text"
                                  label="Resort 1"
                                />
                              )
                            }
                          />

                          <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={allResorts.map((resort) => resort.name)}
                            value={resort2}
                            onChange={handleSelect2}
                            sx={{
                              marginTop: "10px",
                              background: "white",
                              opacity: 0.8,
                              border: "5px  gray",
                              width: "100%",
                            }}
                            renderInput={(params) =>
                              !toast ? (
                                <TextField {...params} label="Resort 2" />
                              ) : (
                                <TextField
                                  onClick={closeToast}
                                  error
                                  {...params}
                                  id="outlined-error-helper-text"
                                  label="Resort 2"
                                />
                              )
                            }
                          />
                          <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={allResorts.map((resort) => resort.name)}
                            value={resort3}
                            onChange={handleSelect3}
                            sx={{
                              marginTop: "10px",
                              background: "white",
                              opacity: 0.8,
                              border: "5px  gray",
                              width: "100%",
                            }}
                            renderInput={(params) =>
                              !toast ? (
                                <TextField {...params} label="Resort 3" />
                              ) : (
                                <TextField
                                  onClick={closeToast}
                                  error
                                  {...params}
                                  id="outlined-error-helper-text"
                                  label="Resort 3"
                                />
                              )
                            }
                          />
                        </div>
                      </div>
                      <button
                        onClick={Compare}
                        type="button"
                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm "
                      >
                        Compare
                      </button>
                    </div>

                    <div className="mt-3 flex justify-center items-center text-center  ">
                      <Link
                        onClick={() => (document.body.style.overflow = "auto")}
                        to={"/about"}
                        className="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600"
                      >
                        Need help?
                      </Link>
                      <FormModal />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
