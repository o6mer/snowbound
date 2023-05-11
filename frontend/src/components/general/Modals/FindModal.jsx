import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./Modal.css";
import { Link, useNavigate } from "react-router-dom";
import FormModal from "./FormModal";
export default function FindModal(props) {
  if (!props.open) {
    return null;
  }
  const [allContries, setAllContries] = useState([]);
  const [allResorts, setAllResorts] = useState([]);
  const [continent, setContinent] = useState(props.continent);
  const [country, setCountry] = useState(props.country);
  const [resort, setResort] = useState("none");
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();
  const allContinent = [
    "Europe",
    "North America",
    "South America",
    "Australia",
  ];

  useEffect(() => {
    setContinent(props.continent);
    setCountry(props.country);
    getAllResorts(props.country);
    getAllCountries(props.continent);
  }, []);
  const getAllCountries = async (continent) => {
    await axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/resort/countrybycont`, {
        continent,
      })
      .then((res) => {
        setAllContries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllResorts = async (country) => {
    await axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/api/resort/find/country/${country}`
      )
      .then((res) => {
        setAllResorts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSelect1 = (event, value) => {
    if (value) {
      setContinent(value);
      getAllCountries(value);
    }
  };
  const handleSelect2 = (event, value) => {
    if (value) {
      setCountry(value);
      getAllResorts(value);
    }
  };
  const handleSelect3 = (event, value) => {
    if (value) {
      setResort(value);
    }
  };
  const Find = (e) => {
    e.preventDefault();
    if (
      allContinent.find((theContinent) => theContinent === continent) &&
      allContries.find((theCountry) => theCountry.name === country)
    ) {
      document.body.style.overflow = "auto";
      navigate(`/search/${continent}/${country}/${resort}`);
      window.location.reload(false);
    } else {
      setToast(true);
    }
  };
  const closeToast = () => {
    setToast(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 modal animated 
      ${props.open ? "fadeIn" : "fadeOut faster"}  shadow-2xl`}
    >
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
                  <h1 className="block text-2xl font-bold text-gray-800">
                    {" "}
                    Find your vecation
                  </h1>
                </div>

                <div className="mt-5">
                  <form>
                    <div className="grid gap-y-4">
                      <div>
                        <div className="relative">
                          <Autocomplete
                            options={allContinent}
                            value={continent}
                            onChange={handleSelect1}
                            sx={{
                              marginTop: "1rem",
                              background: "white",
                              opacity: 0.8,
                              border: "5px  gray",
                              width: "100%",
                            }}
                            renderInput={(params) =>
                              !toast ? (
                                <TextField {...params} label="Continent" />
                              ) : (
                                <TextField
                                  onClick={closeToast}
                                  error
                                  {...params}
                                  id="outlined-error-helper-text"
                                  label="Continent"
                                />
                              )
                            }
                          />
                          <Autocomplete
                            options={allContries.map((country) => country.name)}
                            value={country}
                            onChange={handleSelect2}
                            sx={{
                              marginTop: "1rem",
                              background: "white",
                              opacity: 0.8,
                              border: "5px  gray",
                              width: "100%",
                            }}
                            renderInput={(params) =>
                              !toast ? (
                                <TextField {...params} label="Country" />
                              ) : (
                                <TextField
                                  onClick={closeToast}
                                  error
                                  {...params}
                                  id="outlined-error-helper-text"
                                  label="Country"
                                />
                              )
                            }
                          />
                          <Autocomplete
                            options={allResorts.map((resort) => resort.name)}
                            onChange={handleSelect3}
                            sx={{
                              marginTop: "1rem",
                              background: "white",
                              opacity: 0.8,
                              border: "5px  gray",
                              width: "100%",
                            }}
                            renderInput={(params) =>
                              !toast ? (
                                <TextField {...params} label="Resort" />
                              ) : (
                                <TextField
                                  onClick={closeToast}
                                  error
                                  {...params}
                                  id="outlined-error-helper-text"
                                  label="Resort"
                                />
                              )
                            }
                          />
                        </div>
                      </div>
                      <button
                        onClick={Find}
                        type="button"
                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm "
                      >
                        Search
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
