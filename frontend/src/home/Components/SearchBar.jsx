import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchBar({ handleSearch, isToast }) {
  const [resortName, setResortName] = useState("");
  const [allResorts, setAllResorts] = useState([]);
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getAllResorts = async () => {
      await axios
        .get("http://localhost:8000/api/resort/get")
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
  const handleSelect = (event, value) => {
    if (value) {
      setResortName(value);
    }
  };
  const showResort = (e) => {
    e.preventDefault();
    console.log(resortName);

    if (allResorts.find((resort) => resort.name === resortName)) {
      navigate(`/resort/${resortName}`);
    } else {
      setToast(true);
    }
  };
  const closeToast = () => {
    setToast(false);
  };
  useEffect(() => {
    if (isToast) {
      setToast(true);
    }
  }, [isToast]);
  return (
    <div className="relative">
      <form className="mt-14 flex flex-col mt-10 items-center w-full mb-4 md:flex-row md:px-16">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={allResorts.map((resort) => resort.name)}
          value={resortName}
          clearIcon={
            <ClearIcon
              onClick={() => {
                handleSearch && setResortName("");
              }}
              fontSize="small"
            />
          }
          onChange={handleSelect}
          sx={{
            background: "white",
            opacity: 0.8,
            border: "5px  gray",
            width: "100%",
          }}
          renderInput={(params) =>
            !toast ? (
              <TextField
                {...params}
                onChange={(e) => console.log(params)}
                label="Search for a resort..."
              />
            ) : (
              <TextField
                onClick={closeToast}
                error
                {...params}
                id="outlined-error-helper-text"
                label="Search for a resort..."
              />
            )
          }
        />

        <button
          onClick={(e) => {
            handleSearch ? handleSearch(e, resortName) : showResort(e);
          }}
          type="button"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto  bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
        >
          <SearchIcon /> Search
        </button>
      </form>
    </div>
  );
}
