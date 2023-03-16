import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  GoogleMap,
  MarkerF,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Loader from "../../general/Loader";
import LanguageIcon from "@mui/icons-material/Language";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import hotel from "../../assets/occupied-bed-svgrepo-com.svg";

const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
const libraries = ["places"];

const MapContainer = ({ location, name, category }) => {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (!location) return;
    const fetchData = async () => {
      try {
        setIsloading(true);
        const { data } = await axios.post(
          "http://localhost:8000/api/google/find-nearby",
          { location, category }
        );

        if (!data) return;

        console.log({ data });

        setSelected();
        setPlaces(data.results);
        setIsloading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [location, category]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  return (
    <div className="flex flex-col md:flex-row w-full justify-center gap-2 h-[80vh] ">
      {!isLoaded || isLoading ? (
        <Loader />
      ) : (
        <>
          <PlacesList
            places={places}
            selected={selected}
            setSelected={setSelected}
          />
          <Map
            location={location}
            places={places}
            name={name}
            selected={selected}
            setSelected={setSelected}
          />
        </>
      )}
    </div>
  );
};

const Map = ({ location, places, name, selected, setSelected }) => {
  const [lat, lng] = location?.split(",");
  const calcCenter = { lat: Number(lat), lng: Number(lng) };
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  useEffect(() => {
    if (!selected) return;

    setIsInfoWindowOpen(true);
  }, [selected]);

  const handleMarkerClicked = (place) => {
    if (!place) return;

    setSelected(place);
  };

  return (
    <GoogleMap
      zoom={15}
      center={selected?.geometry.location || calcCenter}
      mapContainerStyle={{
        display: "flex",
        flexGrow: 1,
      }}
      // onLoad={(map) => setMap(map)}
    >
      <MarkerF
        label={{ text: name }}
        position={calcCenter}
        icon={{
          path: google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: "green",
          strokeColor: "green",
        }}
      />
      {isInfoWindowOpen && (
        <InfoWindow
          position={selected?.geometry.location}
          onCloseClick={() => setIsInfoWindowOpen(false)}
          zIndex={999}
        >
          <PlaceInfowWindow placeData={selected} />
        </InfoWindow>
      )}
      {places?.map((place) => (
        <MarkerF
          label={{ text: place.name, fontWeight: "600", fontSize: "14px" }}
          onClick={() => handleMarkerClicked(place)}
          position={place.geometry.location}
          key={place?.place_id + place?.name}
        />
      ))}
    </GoogleMap>
  );
};

const PlaceInfowWindow = ({ placeData }) => {
  const [placeDetails, setPlaceDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!placeData) return;

    const fetchPicture = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.post(
          `http://localhost:8000/api/google/get-place/${placeData.place_id}`
        );

        if (!data) return;

        console.log({ data });
        setPlaceDetails(data.result);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchPicture();
  }, [placeData]);

  return (
    <div className="bg-white">
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col">
          <p className="text-lg font-bold">{placeDetails?.name}</p>
          <p>{placeDetails?.formatted_address}</p>
          <a
            className="text-blue-700 hover:underline  w-fit"
            href={placeDetails?.website}
            target="_blank"
          >
            <LanguageIcon fontSize="small" /> Visit Website
          </a>
          <a
            className="text-blue-700 hover:underline w-fit"
            href={`tel:${placeDetails?.international_phone_number}`}
          >
            <LocalPhoneIcon fontSize="small" />
            {placeDetails?.international_phone_number}
          </a>
          <div className="flex flex-col gap-1">
            {placeDetails?.opening_hours?.weekday_text?.map((day) => (
              <p>{day}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const PlacesList = ({ places, selected, setSelected }) => {
  return (
    <div className="  md:w-[30%] overflow-y-scroll hidden md:flex flex-col">
      {places?.map((place) => (
        <button
          key={place.place_id}
          className={`${
            selected?.place_id === place.place_id
              ? "bg-slate-200 hover:bg-slate-300"
              : "hover:bg-slate-200"
          } transition-all text-left px-2 py-1`}
          onClick={() => setSelected(place)}
        >
          <p>{place?.name}</p>
          <div className="flex">
            <Rating name="read-only" value={Number(place?.rating)} readOnly />
            <p>({place?.user_ratings_total})</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default MapContainer;
