import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  MarkerF,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Loader from "../../general/Loader";
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
    <div className="flex w-full justify-center gap-2 h-[80vh] ">
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
  const [map, setMap] = useState();

  const handleMarkerClicked = (place) => {
    if (!place) return;

    setSelected(place);
    setIsInfoWindowOpen(true);
  };

  return (
    <GoogleMap
      zoom={10}
      center={selected?.geometry.location || calcCenter}
      mapContainerStyle={{
        width: "70%",
      }}
      onLoad={(map) => setMap(map)}
    >
      <MarkerF label={name} position={calcCenter} />
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
          label={place.name}
          onClick={() => handleMarkerClicked(place)}
          position={place.geometry.location}
          key={place?.place_id + place?.name}
        />
      ))}
    </GoogleMap>
  );
};

const PlaceInfowWindow = ({ placeData }) => {
  return (
    <div className="">
      <p>{placeData?.name}</p>
    </div>
  );
};

const PlacesList = ({ places, selected, setSelected }) => {
  return (
    <div className="w-[30%] overflow-y-scroll flex flex-col">
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
            <Rating name="read-only" value={place?.rating} readOnly />
            <p>({place?.user_ratings_total})</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default MapContainer;
